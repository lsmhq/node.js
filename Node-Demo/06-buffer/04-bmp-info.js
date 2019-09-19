const fs = require('fs');
var buf = fs.readFileSync ('./nodejs-logo.bmp');
console.log('width:',buf.readInt32LE(0x12));
console.log('height:',buf.readInt32LE(0x16));
console.log('deepth:',buf.readUInt16LE(0x1c));
