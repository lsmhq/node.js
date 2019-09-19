const Read = require('stream').Readable;

var r = new Read();
r.push('hello ');
r.push(' world ');
r.push(' !');
r.pipe(process.stdout);