let express = require('express');
let bodyParser = require('body-parser');
let session = require('express-session');
let url = require('url');
let fs = require('fs');
let app = express();
app.use(session({
    resave : true,
    secret : 'lcy',
    saveUninitialized:true
}));
app.listen(8090);
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.use(function(req,res,next){

    //只允许3000端口访问
    res.header('Access-Control-Allow-Origin','http://localhost:3000');
    //服务允许客户端发的方法
    res.header('Access-Control-Allow-Methods','GET,POST,DELETE,PUT');
    //服务器允许的请求头
    res.header('Access-Control-Allow-Headers','Content-Type,Accept');
    //允许客户端把cookie发过来
    res.header('Access-Control-Allow-Credentials','true');
    //如果请求的方法是OPTIONS,那么意味着客户端只要响应头，直接结束响应即可
    if(req.method === 'OPTIONS'){
        res.end();
    }else{
        next();
    }
});
//获取首页轮播图
let sliders = require('./mock/sliders');
app.get('/api/sliders', function (req, res) {
    res.json(sliders);
});
//获取首页轮播图列表

let movieList = '';
fs.readFile('./mock/movieList.json', 'utf-8', (err, data) => {
   if((!err) && data.length > 0){
       movieList = JSON.parse(data);
   }
});
function getShowList(showing, offset, limit) {
    let newMovies = movieList.filter((item, index) => {
        return item.isShow === showing;
    });


    offset = isNaN(offset) ? 0 : parseInt(offset);

    limit = isNaN(limit) ? 0 : parseInt(limit);
    let hasMore = (limit+offset) < newMovies.length;

    newMovies = newMovies.slice(offset, offset + limit);

    newMovies = {"hasMore" : hasMore, "list" : [...newMovies]};
    return newMovies = JSON.parse(JSON.stringify(newMovies));
}
app.get('/api/movieList', function(req, res){
    //offset从哪请求，limit请求几条
    let {showing = -1,offset = 0, limit = 5} = req.query;

    if(showing == 0){
        let newMovies = getShowList(true, offset, limit);
        res.json(newMovies);
        return;
    }else if(showing == 1){
        let newMovies = getShowList(false, offset, limit);
        res.json(newMovies);
        return;
    }else{

        res.json(movieList);
    }

});
//获取影院
let cinemas = require('./mock/cinemas');
app.get('/api/cinemas', function (req, res) {

    let {id} = req.query;


    if(isNaN(parseInt(id))){


        res.json(cinemas);
    }else{
        console.log("+++");
        let tempCinemas = cinemas.filter((item) => {

            let number = item.id.find((item) => {
                return item == id;
            });
            return !isNaN(number);
        });
        res.json(tempCinemas);
    }
});

//修改想看数据并同步更新user用户想看信息
app.get('/api/like', function (req, res) {
    let {id} = req.query;
    fs.readFile('./mock/movieList.json', 'utf-8' ,(err, data)=>{

        let user = req.session.user;

        if(!user) return res.json('用户未登录');
        if(!user.likes) user.likes = [];
        if(err||data.length <= 0) {
            res.send([]);
        }else{
            let movies = JSON.parse(data);


            let movie = movies.find(item => item.id == id);

            fs.readFile('./mock/users.json', 'utf-8', (err, data) => {
                let users = JSON.parse(data);
                //获取用户信息
                let oldUser = users.find((item) => {
                    return item.username == user.username;
                });

                if(!movie.isChange){
                    movie.like = parseFloat(movie.like) + 1;
                    movie.isChange = true;
                    //增加想看项
                    user.likes.push(movie);


                    oldUser.likes = user.likes;
                }else{

                    movie.like = parseFloat(movie.like) - 1;
                    movie.isChange = false;
                    //删除想看项
                    oldUser.likes = oldUser.likes.filter((item) => {
                        return item.id != id;
                    });
                }
                fs.writeFile("./mock/users.json",JSON.stringify(users), () => {
                    fs.writeFile("./mock/movieList.json",JSON.stringify(movies), () => {
                        res.json({code : 0});
                    });
                });

            });
        }
    })
});

//获取评论
app.get('/api/comment', function (req, res) {
    let {id} = req.query;
    id = parseInt(id);
    fs.readFile('./mock/comments.json', 'utf-8', (err, data) => {
        if(err||data.length <= 0) {
            res.send([]);
        }else{
            let comments = JSON.parse(data);
            let comment = comments[id];
            res.json(comment);
        }
    });
});
//添加评论
app.post('/api/addComment', function (req, res) {
    let message = req.body;
    let user = req.session.user;
    if(!user) return res.json('用户未登录');
    let username = user.username;
    fs.readFile('./mock/comments.json', 'utf-8', (err, data) => {
        let comments = JSON.parse(data);
        let newComment = {};
        newComment.username = username;
        newComment.content = message.content;
        comments[message.id].push(newComment);
        fs.writeFile('./mock/comments.json', JSON.stringify(comments), () => {
            res.send('评论成功');
        })
    })
});
//座位信息
//id(当前电影id) seat数组
app.post('/api/seat', function (req, res) {
    let user = req.session.user;
    if(!user) return res.json('用户未登录');
    if(!user.tickets) user.tickets = [];
    if(!user.seatNumber) user.seatNumber = [];
    let {id, seat} = req.body;
    id = parseInt(id);

    fs.readFile('./mock/seat.json', 'utf-8', (err, data) => {
        let seats = JSON.parse(data);
        if(!seats[id]) seats[id] = [];

        seat = JSON.parse(seat);

        seat.forEach(item => {
            item = parseInt(item);

            seats[id][item] = true;
        });

        fs.writeFile('./mock/seat.json', JSON.stringify(seats), () => {
            let movie = movieList[id];
            let tempUser = user.tickets.find(item => {
                return item.id == movie.id
            });
            if(typeof tempUser !== 'object') user.tickets.push(movie);

            if(!user.seatNumber[id]) user.seatNumber[id] = [];


            user.seatNumber[id] = [...user.seatNumber[id], ...seats[id]];

            fs.readFile('./mock/users.json', 'utf-8', (err, data) => {
                let users = JSON.parse(data);

                let newUser = users.find(item => {
                    return item.username == user.username;
                });
                newUser.tickets = user.tickets;
                newUser.seatNumber = seats;
                fs.writeFile('./mock/users.json', JSON.stringify(users), ()=>{
                    res.send("购票成功");
                })
            })

        })

    })
});

//注册
app.post('/api/reg',function(req,res){
    console.log(req.url);
    console.log(req.body);
    fs.readFile('./mock/users.json', 'utf-8' ,(err, data)=>{

        let users = JSON.parse(data);
        console.log(users);

        let user = users.find(item => item.username == req.body.username);
        console.log(user);
        if(user){
            res.json({code : 1, error : '用户名已存在'});
        }else{
            users.push(req.body);
            fs.writeFile('./mock/users.json', JSON.stringify(users), () => {
                res.json({code : 0, error : '注册成功'});
            })
        }

    });

});

//获取用户信息
app.get('/api/userLikes', function (req, res) {
    let user = req.session.user;
    if(!user) return res.json('用户未登录');
    fs.readFile('./mock/users.json', 'utf-8', (err, data) => {
        let users = JSON.parse(data);
        let nowUser = users.find((item) => {
            return item.username == user.username;
        });
        req.session.user = nowUser;
        res.json(nowUser);
    })
});


//登录
app.post('/api/login', function (req, res) {
   fs.readFile('./mock/users.json', 'utf-8', (err, data) => {
       let users = JSON.parse(data);
       let user = req.body;
       user = users.find((item) => {
           return item.username == user.username && item.password == user.password;
       });
       if(user){
           req.session.user = user;
           res.json({code:0,success:'登陆成功',user});
       }else{
           res.json({code:1,error:'用户名或密码错误'});
       }
   })
});

app.get('/api/logout', function(req,res){
    req.session.user = null;
    res.json({code:0,success:'已退出登录'});
});

app.get('/api/validate',function(req,res){
    if(req.session.user){
        res.json({code:0,user:req.session.user});
    }else{
        res.json({code:1,error:'此用户未登录'});
    }
});

//获取排行榜数据
let rankList = require('./mock/rankList');
app.get('/api/rankList', function (req, res) {
    res.json(rankList);
});

