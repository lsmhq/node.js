const fs = require('fs');
var dst = process.argv[2];

console.log(fs.statSync(dst));