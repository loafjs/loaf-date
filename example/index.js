const LD = require('../index');

console.log(LD(new Date()).Y);

console.log(LD('2018-12-17').Y);

console.log(LD().format('Y-M-D H:MN:S'));

console.log(LD('2019-01-03 04:05:06').format('W'));

console.log(LD('2019-01-01 05:05:05').format('t'));

console.log(LD('2019-01-01 05:05:05').diff(LD('2019-01-08 05:05:06'), 'weeks'));

console.log(LD('2019-01-01 05:05:05').diff(LD('2018-01-01 07:05:05'), 'days'));

console.log(LD('2019-01-01 05:05:05').diff(LD('2018-01-01 05:05:04'), 'years'));