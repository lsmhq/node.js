const log = console.log;

usr = process.argv[2];
pwd = process.argv[3];

log('usr:s%',usr,'pwd:s%',pwd);

var str = usr + ':' + pwd;

var buf = new Buffer(usr + ':' + pwd);

log('base64:%s',buf.toString('base64'));


