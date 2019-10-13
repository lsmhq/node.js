var httpserver = require("http");
var qs = require("querystring");
var url = require("url");

httpserver.createServer(onRequest).listen(3000);

function onRequest(request,response)
{
    var pathname = url.parse(request.url).pathname;
    if(pathname=="/postlogin")    //处理post方式请求
    {
        var urlstr="";
        request.on("data",function(postdata){
            urlstr+=postdata;    //接收到的表单数据字符串，这里可以用两种方法将UTF-8编码转换为中文
            var jsondata = qs.parse(urlstr);        //转换成json对象
            console.log('urlstr:',urlstr);
            console.log('jsondata:',jsondata);
            urlstr = JSON.stringify(jsondata);
        });
        request.on("end",function(){
            response.writeHead(200,{"Content-Type":"text/plain; charset=utf-8"});
            response.write(urlstr);
            response.end();
        });
    }
    else
    {
        response.writeHead(200,{"Content-Type":"text/plain"});
        response.write("error");
        response.end();
    }
}
