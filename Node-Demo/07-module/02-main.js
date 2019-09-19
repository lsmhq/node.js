const p = require('./02-module-var.js');
const s = require('./02-module-obj.js');
const c = require('./02-export-obj2.js');
//console.log(module);
/*console.log(p);

const circle = require('./02-export-function');

console.log('r = 10,area:%d',circle(10).area());
console.log('r = 10,circumference:%d',circle(10).circumference());
*/
//console.dir(module);
/*
console.log('obj: ');
console.log('area:%d',s.area(10));
console.log('周长:%d',s.O(10));
console.log('D:%d',s.D(10));
*/
//

console.log('area:%d',c.area(10));
console.log('D:%d',c.D(10));
console.log('O:%d',c.O(10));