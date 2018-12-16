const Core = require('./src/Core');

class LoafDate extends Core {

  constructor(dateValue) {
    super(dateValue);
  }

}

module.exports = (dateValue) => {
	return new LoafDate(dateValue);
}