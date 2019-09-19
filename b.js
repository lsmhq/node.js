const http = require('http');
const qs = require('querystring');
const url = require('url');

var router = function () {
    if(!(this instanceof router)){
        return new router();
    }
    this.routeTable = {
        'GET':{},//获取
        'POST':{},//创建
        'PUT':{},//更新
        'DELETE':{},//删除
        'OPTIONS':{}//
    };
    this.addPath = function (method,path,callback) {
        if(this.routeTable[method] === 'undefined')
            throw new Error('${method} not be allowed');//${}自动替换
        this.routeTable[method][path] = callback;
    }
    this.get = function (path,callback) {
        this.addPath('GET',path,callback);
    }
    this.post = function (path,callback) {
        this.addPath('POST',path,callback);
    }
    this.PUT = function (path,callback) {
        this.addPath('PUT',path,callback);
    }
    this.DELETE = function (path,callback) {
        this.addPath('DELETE',path,callback);
    }
    this.options = function(path,callback){
        this.addPath('OPTIONS',path,callback);
    }
    this.findPath = function(method,path){
        if(this.routeTable[method] === 'undefined'){
            return null;
        }
        if(this.routeTable[method][path] === 'undefined'){
            return null;
        }
        return this.routeTable[method][path];
    }
}

var R = new router();

R.get('/',(req,res)=>{
    res.end('ok');
})
R.post('/post',(req,res)=>{
    res.end('post');
})
console.log(R.routeTable);
var server = http.createServer((req,res)=>{
    let urlobj = url.parse(req.url,true);
    if(R.findPath(req.method,urlobj.pathname)===null){
        res.statusCode = 404;
        res.end('pages not found');
        return;
    }
    //为了快速访问属性值,上下文环境
    let ctx = {
        method : req.method,
        path : urlobj.pathname,
        query : urlobj.query,//解析之后url字符串
        url : urlobj,
        reques : req,
        response : res,
        headers : req.headers
    }

    var bodyData = '';

    req.on('data',data => {
        bodyData += data.toString('utf8');
    })
    req.on('end',()=>{
        if(req.method == 'POST' || req.method == 'GET'){
            let formType = 'application/x-www-form-urlencoded';
            if(req.headers['content-type'] == formType){
                ctx.body = qs.parse(bodyData);
            }else{
                ctx.body = bodyData;
            }
        }
    })
});

//获取
R.get((ctx)=>{
})
//创建
R.post((ctx)=>{
})
//
server.listen(8000,'localhost');
module.exports = myhttp;