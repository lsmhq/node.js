const GreenStream = require('./08.js');
const stdin = process.stdin;

var g = new GreenStream();


stdin.resume();
stdin.pipe(g);
