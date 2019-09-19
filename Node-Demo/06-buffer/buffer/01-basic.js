var buf1 = new Buffer(256);
buf1[0] = 0x11;
console.log(buf1);
for (var i = 0 ;i < buf1.length;i++){
    buf1[i] = i;
}
console.log(buf1);
buf1.fill(0,0,256);//fill  填充0从0~256
console.log(buf1);
console.log(typeof buf1);

