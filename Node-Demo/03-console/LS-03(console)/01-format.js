

var user = {
    name:"daitianfang",
    age:21,
    qq:'784433957'
};

//console.log()的用法

var log = console.log;
log(user);
log('Name:%s',user.name);
log("user:"+user);//[Object Object]
log('Name:',user.name,'Age:',user.age,'QQ:',user.qq);
log("user:",JSON.stringify(user));

//console.error();输出错误信息到控制台

console.error(user);


