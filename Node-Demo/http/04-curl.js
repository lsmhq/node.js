const http = require('http');
const url  = require('url');
const addr = process.argv[2] || 'http://sample.wangding.in/web/one-div.html';
var protocol = url.parse(addr).protocol;

const http = (protocol === 'http') ? 'http':'require("https")'

console.log(protocol);

options.headers = {
    'User-Agent':'01.js'
}

http.get(options,function(res){
    console.log(res.headers);
    console.log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);
    res.pipe(process.stdout);
});