const EventEmitter = require('events');

var e =new EventEmitter();


global.setInterval(function(){
    e.emit('hello');
},1000);

global.setTimeout(function(){
    e.emit('bye');
},5000);

e.on('hello',function(){
    console.log('Hello Event');
})

e.on('bye',function(){
    console.log('bye Event');
    process.exit();
});







