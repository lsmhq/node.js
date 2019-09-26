const cp = require('child_process');

cp.execFile('node 02-child.js',[],function(err,out,error){
    if(error){
        console.log(err);
        process.exit(1);
    }
    console.log(out);
});
