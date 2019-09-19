const Read = require('stream').Readable;

MyReadable.prototype = Read.prototype;
function MyReadable(){
    Read.call(this);
    var c = 'c'.charCodeAt(0);
    MyReadable.prototype._read = ()=>{
        this.push(String.fromCharCode(c++));
        if(c > 'z'.charCodeAt(0)){
            this.push(null)
        }
    }
}

module.exports = MyReadable;