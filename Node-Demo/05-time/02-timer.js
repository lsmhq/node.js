var i = 0;
function timer(){
    console.log('%d/100',i++);
}
var time = setInterval(function(){
    timer();
    if(i > 100){
        clearInterval(time);
        console.log('Download success!');
    }
} ,Math.random()*50)