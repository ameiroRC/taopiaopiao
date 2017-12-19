let express = require('express');
let bodyParse = require('body-parser');
let app = express();
app.listen(8090);
app.use(function(req,res,next){

    //只允许3000端口访问
    res.header('Access-Control-Allow-Origin','http://localhost:8080');
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
app.get('/api/movieList', function(req, res){
    //offset从哪请求，limit请求几条
    let {offset = 0, limit = 5} = req.query;

    offset = isNaN(offset) ? 0 : parseInt(offset);
    limit = isNaN(limit) ? 0 : parseInt(limit);
    let newMovies = JSON.parse(JSON.stringify(movieList));
    console.log(newMovies === movieList);
    //如果下一页的起始索引已经大于等于总条数了，则认为已经分页完毕，后面已经没有数据了
    newMovies.hasMore = limit+offset < newMovies.list.length;
    //提取指定页的数据
    newMovies.list = newMovies.list.slice(offset, offset + limit);

    res.json(newMovies);
});
//获取排行榜数据
let rankList = require('./mock/rankList');
app.get('/api/rankList', function (req, res) {
    res.json(rankList);
});