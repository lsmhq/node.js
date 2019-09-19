const Write = require('stream').Writable;

function GreenStream(){
    Write.call(this);
    //chunk()接收你输入的数据
    GreenStream.prototype._write = (chunk,encoding,callback)=>{
        process.stdout.write('\033[1;32m' + 'hello world!' + '\033[1;37m');
        callback();
    }
}
GreenStream.prototype = Write.prototype;

module.exports = GreenStream;