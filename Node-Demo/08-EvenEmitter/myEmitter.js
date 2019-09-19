function myEmitter(){
    //键值对
    var _listener = {};
    //注册
    function on(evt,fn){
        if(typeof(_listener[evt]) === 'undefined'){
            _listener[evt] = [];
        }
        _listener[evt].push(fn);
    }
    //触发
    function emit(evt,arg){
        if(typeof(_listener[evt]) === 'undefined'){
            console.error('Error:%s is not defined',evt);
            process.exit(1);
        }
        _listeners[evt].forEach((fn)=>{
            fn.call(this,arg);
        })
    }
}

module.exports = myEmitter;