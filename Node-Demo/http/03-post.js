const http = require('http');
const log = console.log;
http.createServer(function(req,res){
    log(`${req.method} ${req.url} ${req.httpVersion}`);
    log(req.headers);
    req.pipe(process.stdout)
    res.end('hello client');
    }).listen(8080);