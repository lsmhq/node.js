var log = console.log;
//process.argv数组中存放的前两个分别是 命令路径 和 执行文件路径
name = process.argv[2];
password = process.argv[3];

var str = name +':'+password;

var buf = new Buffer(str);
log(buf.toString('base64'));