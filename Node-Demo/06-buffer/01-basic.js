const log = console.log;
var buf1 = new Buffer(256);//256:buffer的尺寸,字节
buf1[0] = 0x11;
log('buf1 length:',buf1.length);
log('buf1:',buf1);
 for(var i = 0;i<buf1.length;i++){
          buf1[i]=i; }

buf1.fill(0,0,256);
var buf2 = buf1.slice(250,256);//切取后
log('buf2:',buf2);

log("buf1:",buf1);
