const LD = require('../index');

console.log(LD(new Date()).Y);

console.log(LD('2018-12-17'));

console.log(LD('2018-12-17').Y);

console.log(LD().format('Y-M-D H:MN:S'));

console.log(LD('2019-01-03 04:05:06').format('W'));

console.log(LD('2019-01-01 05:05:05').format('t'));

console.log(LD('2019-01-01 05:05:05').diff(LD('2018-01-01 05:05:05'), 'years'));

console.log(LD('2018-03-01 05:05:05').diff(LD('2017-03-01 05:05:05'), 'months'));

console.log(LD('2019-01-01 05:05:05').diff(LD('2019-01-08 05:05:05'), 'weeks'));

console.log(LD('2019-01-01 05:05:05').diff(LD('2018-01-01 05:05:05'), 'days'));

console.log(LD('2018-01-01 05:05:05').diff(LD('2018-01-01 10:05:05'), 'hours'));

console.log(LD('2018-01-01 05:05:05').diff(LD('2018-01-01 05:10:06'), 'minutes'));

console.log(LD('2018-01-01 05:05:05').diff(LD('2018-01-01 05:05:10'), 'seconds'));

const baseDate = LD('2019-01-01 00:00:00');
const targetDate = LD('2019-02-01 00:00:00');
console.log(baseDate.diff(targetDate, 'months'));

console.log(LD('2019-01-03 04:05:06').format('ms')) // ex. 0

console.log(LD('2019-01-03 04:05:06').format('MS')) // ex. 000

console.log(LD('2019-01-01 04:05:06').add(-1, 'years').format('Y-M-D'));

console.log(LD('2019-01-01 04:05:06').add(-1, 'years').add(5, 'days').format('Y-M-D'));
