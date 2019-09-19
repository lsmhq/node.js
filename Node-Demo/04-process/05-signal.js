
console.log('process ID:',process.pid);
process.stdin.resume();//保持运行状态

process.on('SIGINT',()=>{
    console.log('Press ^C or Kill -2');
    process.exit();
})

process.on('SIGTSTP',()=>{
    console.log('press ^C , stop running');
    process.exit();
});