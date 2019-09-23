const fs = require('fs');

var uid = process.argv[2];
var gid = process.argv[3];
var dst = process.argv[4];

fs.chownSync(dst,Number(uid),gid);