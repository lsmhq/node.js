const fs = require('fs');

const lnk = process.argv[2];

console.log('%s - > %s',lnk,fs.readlinkSync(lnk));