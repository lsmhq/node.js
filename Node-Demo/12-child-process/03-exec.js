const cp = require('child_process');
var cmd = '';
for(var i =0 ;i < process.argv.length;i++){
    cmd += (process.argv[i] + ' ');
}
cp.exec('cmd',function(err,out,error){
    if(err){
        console.log(err.message);
        process.exit(1);
    }
    console.log(out);
});
