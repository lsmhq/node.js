var message = ['Name:','Email:','QQ:','tel:'];

var usr = {},i = 0;
console.log(message[i]);//引导
process.stdin.on('data',function(data){
    if(i != message.length){
        usr[message[i]] = data.slice(0,data.length-2).toString('utf8');
        //console.log(data.toString('utf8'));
        console.log(usr);
        i++;//
        console.log(message[i]);//引导
        if(i == 4){
            process.exit();
        }
    }
});
