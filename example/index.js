const LD = require('../index');

console.log(LD(new Date()).Y);

console.log(LD('2018-12-17').Y);

console.log(LD().format('Y-M-D H:MN:S'));

console.log(LD('2019-01-03 04:05:06').format('W'));

console.log(LD('2019-01-01 05:05:05').format('t'));