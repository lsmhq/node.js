const http = require('http');
const url  = require('url');
const addr = process.argv[2] || 'http://sample.wangding.in/web/one-div.html';
var protocol = url.parse(addr).protocol;
const http = (protocol === 'http') ? 'http':'require("https")'
console.log(protocol);


var isOK = false;
function  get(addr) {
    http.get(addr,function(res){
        console.log(res.headers);
        console.log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);
        if(res.statusCode < 400 && res.statusCode >= 300){
            get(res.headers.location);
        }
        res.pipe(process.stdout);
    });
}
get(addr);
