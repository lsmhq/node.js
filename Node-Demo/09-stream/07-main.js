const MyReadable = require('./07-myReadable.js');

var r = new MyReadable();

r.pipe(process.stdout);