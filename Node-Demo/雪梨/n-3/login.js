const http = require("http");
const url = require('url');
const qs = require('querystring');
const fs = require('fs');

var userList = [
    {username: "admin", pwd: "admin"}
];
http.createServer(
    (req,res)=>{
        var path = url.parse(req.url).pathname;//获得端口号之后的路径
        
        //进行判断
        switch (path) {
            case '/post':{
                if(login(req,res)){
                    res.end('OK');
                }
                break;
            }   
            case '/get':
                break;
        }
    }).listen(8083);
function login(req,res) {
    var postData = '';
    req.on('data',(data) => {
        postData += data;//接收表单数据
        console.log('post:',postData);
        postData = qs.parse(postData);//json
        console.log(postData);
    });
    req.on('end',()=>{
        res.writeHead(200,{"Content-Type":"text/plain; charset=utf-8"});
        if(postData.username === userList[0].username && postData.pwd === userList[0].pwd){
            res.write(JSON.stringify(postData));
            res.end();
            return true;
        }
        else{
            var html = "<p>用户名或密码错误,请返回重新登录</p>"+" <a>返回</a>";
            res.write('<p>Hello</p>');
            res.end();
            return false;
        }
    })
}