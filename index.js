const Core = require('./src/Core');

class LoafDate extends Core {

  constructor(dateValue) {
    super(dateValue);
    this.formatMap = new Map([
    		[/mn/g, this.mn],
    		[/MN/g, this.MN],
    		[/y/g, this.y],
    		[/Y/g, this.Y],
    		[/m/g, this.m],
    		[/M/g, this.M],
    		[/d/g, this.d],
    		[/D/g, this.D],
    		[/h/g, this.h],
    		[/H/g, this.H],
    		[/s/g, this.s],
    		[/S/g, this.S],
    		[/t/g, this.t],
    		[/w/g, this.w],
    		[/W/g, this.W]
    	]);
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