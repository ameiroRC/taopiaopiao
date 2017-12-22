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
    res.header('Access-Control-Allow-Origin','http://localhost:8080');
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
app.listen(3000);