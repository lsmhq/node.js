

function Radio(station){
    //订阅者,键值对，事件响应函数数组
    var _listeners = {
    }
    var that = this;
    setTimeout(() => {
        emit('play',station);
    }, 0);

    setTimeout(() => {
        emit('stop');
    }, 5000);
    function emit(evt,arg){
        if(typeof(_listeners[evt]) === undefined){
            console.error('Error:%s not defined',evt);
            process.exit(1);
        }
        //_listeners[evt]是一个数组
        _listeners[evt].forEach((fn)=>{
            fn.call(this,arg);
        })
    }
    this.on = (evt,fn)=>{
        if(typeof(_listeners[evt]) === undefined){
            _listeners[evt] = [];
        }
        _listeners[evt].push(fn);
    }
}
module.exports = Radio;