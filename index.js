const Core = require('./src/Core');

class LoafDate extends Core {

  constructor(dateValue) {
    super(dateValue);
  }
  
  format(dateFormat) {
    this.formatMap.forEach((value, key) => {
      dateFormat = dateFormat.replace(key, value);
    });
    return dateFormat;
  }

  diff(date, type) {
    return this.diffMap.get(type)(this.t, date.t);
  }

  add(value, type) {
    return this.appMap.get(type)(this.t, value);
  }

}

module.exports = (dateValue) => {
  return new LoafDate(dateValue);
}