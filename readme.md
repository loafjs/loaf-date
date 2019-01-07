# Loaf Date [![npm](https://img.shields.io/npm/v/loaf-date.svg)](https://www.npmjs.com/package/loaf-date) [![npm](https://img.shields.io/npm/dm/loaf-date.svg)](https://www.npmjs.com/package/loaf-date)
Easily output the date format or difference.

## Install
```
npm install --save loaf-date
```

## How to use
```js
const LD = require('loaf-date');

const dateForamt = LD().format('Y-M-D H:MN:S');
console.log(dateForamt);
// 2019-01-03 02:52:17
```

```js
const LD = require('loaf-date');

const baseDate = LD('2019-01-01 00:00:00');
const targetDate = LD('2019-02-01 00:00:00');

console.log(baseDate.diff(targetDate, 'months'));
// 1
```

## Format
```js
const LD = require('loaf-date');

// year
LD('2019-01-03 04:05:06').format('y'); // 19
LD('2019-01-03 04:05:06').format('Y'); // 2019

// month
LD('2019-01-03 04:05:06').format('m') // 1
LD('2019-01-03 04:05:06').format('M') // 01

// date
LD('2019-01-03 04:05:06').format('m') // 3
LD('2019-01-03 04:05:06').format('M') // 03

// hour
LD('2019-01-03 04:05:06').format('m') // 4
LD('2019-01-03 04:05:06').format('M') // 04

// minute
LD('2019-01-03 04:05:06').format('mn') // 5
LD('2019-01-03 04:05:06').format('MN') // 05

// second
LD('2019-01-03 04:05:06').format('s') // 6
LD('2019-01-03 04:05:06').format('S') // 06

// time
LD('2019-01-03 04:05:06').format('t') //ex. 1546286705000

// day of the week
LD('2019-01-03 04:05:06').format('w') //ex. 4
// Sunday = 0;
// Monday = 1;
// ...
// Saturday = 6;
LD('2019-01-03 04:05:06').format('W') //ex. 5
// Monday = 0;
// ...
// Sunday = 6;

// milliseconds
LD('2019-01-03 04:05:06').format('ms') // ex. 0
LD('2019-01-03 04:05:06').format('MS') // ex. 000
```

## Difference
```js
const LD = require('loaf-date');

// yesrs
LD('2019-01-01 05:05:05').diff(LD('2018-01-01 05:05:05'), 'years') // -1
// months
LD('2018-03-01 05:05:05').diff(LD('2017-03-01 05:05:05'), 'months'); // -12
// weeks
LD('2019-01-01 05:05:05').diff(LD('2019-01-08 05:05:05'), 'weeks'); // 1
// days
LD('2019-01-01 05:05:05').diff(LD('2018-01-01 05:05:05'), 'days'); // -365
// hours
LD('2018-01-01 05:05:05').diff(LD('2018-01-01 10:05:05'), 'hours'); // 5
// minutes
LD('2018-01-01 05:05:05').diff(LD('2018-01-01 05:10:06'), 'minutes'); // 5
// seconds
LD('2018-01-01 05:05:05').diff(LD('2018-01-01 05:05:10'), 'seconds'); // 5
```

## Example
You can go to the 'example' directory, install the example source, and check the run.
```
$ cd ./example
```
```
$ node index
```

## License
[MIT](https://github.com/loafjs/loaf-date/blob/master/LICENSE)
