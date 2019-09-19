var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){
    var filename = __dirname + req.url;
    console.log(filename);
    res.end(fs.readFileSync(filename));
    }).listen(8080);
    console.log('Server is running!');
