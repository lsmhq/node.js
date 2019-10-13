const http = require('http');
const url = require('url');
const qs = require('querystring');
const log = console.log;
http.createServer((req,res)=>{
    log(req.url);
    var addr = url.parse(req.url);
    log('pathName:',addr.pathname);
    log('queryName:',addr.query);
    log('path parse:',addr.pathname.split('/'));
    log('qs parse',qs.parse(addr.query));
    log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
    res.end('OK/n');
}).listen(8080);