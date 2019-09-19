const EventEmitter = require('events');

//构造函数开头大写
function Dog(name,energy){
    var _name,_energy;
    var that = this;

    EventEmitter.call(this);//让emit 可以被Dog调用
    _name = name;
    _energy = energy;

    var timer = setInterval(() => {
        if(_energy>0){
            that.emit('bark');
            _energy--;
        }
        else if(_energy<=0){
            clearInterval(timer);
        }
    }, 1000);
    this.getName = () => _name;
    this.getEnergy = () => _energy;
}
//继承EventEmitter,让泰迪藏獒可以.on
Dog.prototype.__proto__ = EventEmitter.prototype;

module.exports = Dog;
