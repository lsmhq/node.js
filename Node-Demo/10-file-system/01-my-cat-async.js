const fs = require('fs');

const file = process.argv[2] || __filename;

//异步，Sync同步
fs.readFile(file,function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data.toString('utf8'));
    }
   
});