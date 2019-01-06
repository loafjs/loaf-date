class Core {

  constructor(dateValue) {
    this.date = typeof dateValue === 'undefined' ? new Date() : 
                typeof dateValue === 'object' ? dateValue : new Date(dateValue);
                
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

    this.diffMap = new Map([
      ['years', this.diffYears],
      ['months', this.diffMonths],
      ['weeks', this.diffWeeks],
      ['days', this.diffDays],
      ['hours', this.diffHours],
      ['minutes', this.diffMinutes],
      ['seconds', this.diffSeconds]
    ]);
  }

  _doubleFigures(figure) {
    return figure < 10 ? '0' + figure : figure;
  }

  _fourDigitsFigures(figure) {
    const digits = String(figure).length;
    return digits > 2 ? figure :
           digits > 1 ? '0' + figure :
           '00' + figure;
  }

  diffYears(baseTime, targetTime){
    const bD = new Core(baseTime);
    const tD = new Core(targetTime);
    const strBD = Number('' + bD.M + bD.D + bD.H + bD.MN + bD.S + bD.MS);
    const strTD = Number('' + tD.M + tD.D + tD.H + tD.MN + tD.S + tD.MS);
    const diffYear = tD.Y - bD.Y;
    const sign = diffYear < 0 ? 1 : -1;
    return (sign > 0 && strTD > strBD) || (sign <= 0 && strTD < strBD) ? diffYear + sign : diffYear;
  }

  diffMonths(baseTime, targetTime){
    
  }

  diffWeeks(baseTime, targetTime) {
    return parseInt((targetTime - baseTime)/1000/60/60/24/7, 10);
  }

  diffDays(baseTime, targetTime) {
    return parseInt((targetTime - baseTime)/1000/60/60/24, 10);
  }

  diffHours(baseTime, targetTime) {
    return parseInt((targetTime - baseTime)/1000/60/60, 10);
  }

  diffMinutes(baseTime, targetTime) {
    return parseInt((targetTime - baseTime)/1000/60, 10);
  }

  diffSeconds(baseTime, targetTime) {
    return parseInt((targetTime - baseTime)/1000, 10);
  }

  get y() {
    const Y = String(this.Y);
    return Number(Y[2]+Y[3]);
  }

  get Y() {
    return this.date.getFullYear();  
  }

  get m() {
    return this.date.getMonth() + 1;
  }

  get M() {
    return this._doubleFigures(this.m);
  }

  get d() {
    return this.date.getDate();
  }

  get D() {
    return this._doubleFigures(this.d);
  }

  get h() {
    return this.date.getHours();
  }

  get H() {
    return this._doubleFigures(this.h);
  }

  get mn() {
    return this.date.getMinutes();
  }

  get MN() {
    return this._doubleFigures(this.mn);
  }

  get s() {
    return this.date.getSeconds();
  }

  get S() {
    return this._doubleFigures(this.s);
  }
  
  get ms() {
    return this.date.getMilliseconds();
  }

  get MS() {
    return this._fourDigitsFigures(this.ms);
  }

  get t() {
  	return this.date.getTime();
  }

  get w() {
  	return this.date.getDay();
  }

  get W() {
  	return this.w === 0 ? 6 : this.w - 1;
  }
}

module.exports = Core