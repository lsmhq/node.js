const EventEmitter = require('events');

function Radio(station){
    var that = this;
    //复制属性方法
    for(var m in EventEmitter){
        this.prototype[m] = EventEmitter.prototype[m];
    }
    setTimeout(() => {
        that.emit('play',station);

    }, 0);

    setTimeout(() => {
        that.emit('stop');
    }, 5000);
}

module.exports = Radio;