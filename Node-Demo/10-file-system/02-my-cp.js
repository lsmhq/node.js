const fs = require('fs'),
      src = process.argv[2];
      dst = process.argv[3];//可写流
//src = fs.createReadStream
//dst = fs.createWriteStream
fs.createReadStream(src).pipe(fs.createWriteStream(dst))