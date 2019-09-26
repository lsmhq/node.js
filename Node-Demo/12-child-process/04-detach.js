const cp = require('child_process');

var child = cp.spawn('cat',['-n','02-spawn.js']);
//    可读流              可写流
child.stdout.pipe(process.stdout);
child.stderr.pipe(process.stderr);