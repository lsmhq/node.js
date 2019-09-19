const fs   = require('fs'),
      file = process.argv[2];//可读流
fs.unlink(file,()=>{
    console.log();
});