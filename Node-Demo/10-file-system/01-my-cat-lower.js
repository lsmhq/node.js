const fs = require('fs');

const file = process.argv[2] || __filename;
try {
    var len = fs.statSync(file).size;
    var buf = new Buffer(len);
    var fid = fs.openSync(file,'r');
    fs.readSync(fid,buf,0,len,0);
    console.log(buf.toString('utf8'));
    fs.closeSync(fid);
} catch (error) {
    console.error(error.message);
    process.exit(1);
}