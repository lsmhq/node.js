const stdin = process.stdin;
const stdout = process.stdout;
stdin.resume();

stdin.on('data',function(data){
    stdout.write(data.toString('utf8').toUpperCase());
});

stdin.on('end',function(){
    stdout.end();
})