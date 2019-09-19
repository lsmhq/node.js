const log = console.log;
var buf1 = new Buffer(256);//256:buffer的尺寸,字节
//初始化buffer 还可以用字符串
buf1[0] = 0x11;
log('buf1 length:',buf1.length);
log('buf1:',buf1);
       
for(var i = 0;i<buf1.length;i++){
    buf1[i]=i; 
}
      
buf1.fill(0,0,256);
var buf2 = buf1.slice(250,256);//切取后
    log('buf2:',buf2);
    log("buf1:",buf1);
    log('buf2',buf2.toJSON());
    log("buf2",JSON.toString());

    var arr = ['a',0xba,0xdf,0x00,256,10];

    var buf3 = new Buffer(arr);

    log('buf3:',buf3);

    var buf4 = new Buffer('hello World');
    
    log('buf4:',buf4);

    buf4.copy(buf3,0,0,buf3.length);//copy,将buf4拷贝到buf3，
    log('buf3:',buf3);

    var str = '你好 daitianfang';
    var buf5 = new Buffer(str);
    log('stringLength:',str.length);
    log('buf5:',buf5.length);

