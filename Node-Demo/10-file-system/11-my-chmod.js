const fs = require('fs');

dst = process.argv[3];
mod = process.argv[4];

fs.chmodSync(dst,parseInt(mod,8));