const log = console.log;

var data = process.argv[2];

log(data);
var buf = new Buffer(data,'base64');

info = buf.toString('utf8').split(':');

log("usr:%s,pwd:%s",info[0],info[1]);



