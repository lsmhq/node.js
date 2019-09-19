const fs = require('fs');
const file = process.argv[2] || __filename;

const fid = fs.openSync(file,'r');//底层

console.log(fs.readFileSync(fid).toString('utf8'));

fs.closeSync(fid);//底层