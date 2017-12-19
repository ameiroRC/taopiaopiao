let express = require('express');
let bodyParse = require('body-parser');
let app = express();
app.listen(8090);

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
        let movies = movieList.list;
        res.json(movies);
    }

});
//获取排行榜数据
let rankList = require('./mock/rankList');
app.get('/api/rankList', function (req, res) {
    res.json(rankList);
});