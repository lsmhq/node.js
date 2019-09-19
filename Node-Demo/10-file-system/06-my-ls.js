const fs = require('fs'),
      dir = process.argv[2] || __dirname;
//console.log(fs.readdirSync(dir));
fs.readdirSync(dir).forEach((val)=>{
    console.log('--'+val);
});
