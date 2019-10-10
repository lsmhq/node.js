const http = require('http');
const log = console.log;
http.createServer((req,res)=>{
    let headers = req.headers;
    let auth = headers.authorization;
    log('##################################################');
    log('auth:',auth);
    log('usr-agent',headers["user-agent"]);
    if(typeof auth !== 'undefined'){
        //log(auth);
        auth = auth.split(' ');
        if(auth[0] === 'basic'){//base64
            var buf = new Buffer(auth[1],'base64');
            log(buf.toString('utf8'));
        }
    }
    log('**************************************************');
    res.end('OK');
}).listen(8080);