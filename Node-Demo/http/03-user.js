var http = require('http');
var url  = require('url');
var addr = 'http://localhost:8080';
var option = url.parse(addr);
option.methon = 'POST';
//console.log(option);
//post方法
http.request(addr,function(req,res){
      req.end('hello server');
});