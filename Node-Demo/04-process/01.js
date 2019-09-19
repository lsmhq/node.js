var log = console.log;
//process的平台信息获取
log('CPU:',process.arch);//x64
log('OS',process.platform);//win32/Linux
log('PID:',process.pid);//process ID
log('execPath:',process.execPath);//绝对路径
log('UID:',process.getuid);//User ID
log('gid:',process.getgid);//Group ID