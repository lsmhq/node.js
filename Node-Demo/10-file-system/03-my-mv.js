const fs = require('fs'),
      src = process.argv[2];//可读流
      dst = process.argv[3];//可写流
fs.renameSync(src,dst);