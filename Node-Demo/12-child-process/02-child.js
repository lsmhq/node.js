console.log(process.pid);

global.setInterval(function(){
    var date = new Date();
    console.log('Time:is %d',date.getDay());
},2000);

global.setTimeout(function(){
    console.log("end...");
    process.exit(1);
},16000);