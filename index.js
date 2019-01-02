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

}

module.exports = (dateValue) => {
	return new LoafDate(dateValue);
}