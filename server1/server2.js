let express = require('express');
let bodyParser = require('body-parser');
let session = require('express-session');
let app = express();
app.use(session({
    resave:true,
    secret:'zfpx',
    saveUninitialized:true
}));
let users = [{username: "123", password: "123"}];
app.use(bodyParser.json());
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin','http://localhost:8081');
    res.header('Access-Control-Allow-Methods','GET,POST,DELETE,PUT');
    res.header('Access-Control-Allow-Headers','Content-Type,Accept');
    res.header('Access-Control-Allow-Credentials','true');
    if(req.method == 'OPTIONS'){
        res.end();
    }else{
        next();
    }
});
app.post('/api/reg',function(req,res){
    let user = req.body;
    let oldUser = users.find(item=>item.username == user.username);
    if(oldUser||user.username==''){
        res.json({code:1,error:'用户名不能重复或为空'});
    }else{
        users.push(user);
        res.json({code:0,success:'注册成功'});
    }
});
app.post('/api/login',function(req,res){
    let user = req.body;
    let oldUser = users.find(item=>item.username==user.username&&item.password==user.password);
    if(oldUser){
        req.session.user = oldUser;
        res.json({code:0,success:"登录成功",user});
    }else{
        res.json({code:1,error:'用户名或密码错误'});
    }
});
app.get('/api/logout',function(req,res){
    req.session.user = null;
    res.json({code:0,success:'退出成功'});
});
app.get('/api/validate',function(req,res){
    if(req.session.user){
        res.json({code:0,user:req.session.user});
    }else{
        res.json({code:1,error:'此用户未登录'});
    }
});



let sliders = require('./mock/sliders');
app.get('/api/sliders', function (req, res) {
    res.json(sliders);
});
//获取首页轮播图列表
let movieList = require('./mock/movieList');
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
//修改想看数据
app.get('/api/like', function (req, res) {
    let {id} = req.query;
    console.log(id);
    fs.readFile('./mock/movieList.json', 'utf-8' ,(err, data)=>{

        console.log(err, data);

        if(err||data.length <= 0) {
            res.send([]);
        }else{
            let movies = JSON.parse(data);
            console.log(movies);
            let movie = movies.find(item => item.id == id);
            if(!movie.isChange){
                movie.like = parseFloat(movie.like) + 1;
                movie.isChange = true;
            }else{
                movie.like = parseFloat(movie.like) - 1;
                movie.isChange = false;
            }

            fs.writeFile("./mock/movieList.json",JSON.stringify(movies), () => {
                res.send(movie);
            });
        }
    })
});

//获取排行榜数据
let rankList = require('./mock/rankList');
app.get('/api/rankList', function (req, res) {
    res.json(rankList);
});


app.listen(8090);