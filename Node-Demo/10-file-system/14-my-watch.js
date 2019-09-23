const fs = require('fs');
var dst = process.argv[2];

fs.watch(dst,function(ev,file){
    console.log('%s : %s',file,ev);
});