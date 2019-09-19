//获取命令行参数
//process.argv
//argv 返回一个数组,数组中存放命令行参数，其中数组前两元素为
//第一元素 
//第二元素 process.execPath()进程文件相对路径

var log = console.log;

log(process.argv[0]);//命令路径
log(process.argv[1]);//执行文件相对路径
var fn = process.argv[2];//后续的命令参数

console.log(fn,'=',eval(fn));