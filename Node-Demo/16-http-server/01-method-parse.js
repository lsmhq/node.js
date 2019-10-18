const http= require('http');
const log = console.log;
http.createServer((req,res) => {
    log('req->method:',req.method);
    res.end('OK');
    switch (req.method) {
        case 'GET':{
            select(req,res);
            break;
        }
        case 'POST':{
            insert(req,res);
            break;
        }
        case 'PUT':{
            update(req,res);
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

function update(req,res) {
    
}

function select(req,res) {
    
}

function insert(req,res) {
    var item = '';
    req.on('data',(data)=>{
        item += data;
    })

    req.on('end',()=>{
        if(typeof item !== 'undefined'){
            item.push()
        }
    })
}

function errMessage() {
    
}