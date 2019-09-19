const EventEmitter = require('events');

      util = require('util');

function Radio(station){
    EventEmitter.call(this);
    var that = this;
    setTimeout(() => {
        that.emit('play',station);

    }, 0);

    setTimeout(() => {
        that.emit('stop');
    }, 5000);
}

util.inherits(Radio,EventEmitter);

module.exports = Radio;