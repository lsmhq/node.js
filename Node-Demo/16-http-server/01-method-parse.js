const http= require('http');
const log = console.log;
http.createServer((req,res) => {
    log('req->method:',req.method);
    res.end('OK');
    switch (req.method) {
        case 'GET':{
            select(res);
            break;
        }
        case 'POST':{
            insert(res);
            break;
        }
        case 'PUT':{

            break;
        }
        case 'DELETE':{
            
            break;
        }
        default:
            errMessage();
            break;
    }
}).listen(8080);

function update(res) {
    
}

function select(res) {
    
}

function insert(res) {
    
}

function errMessage() {
    
}