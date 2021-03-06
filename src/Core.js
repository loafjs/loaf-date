class Core {

  constructor(dateValue) {
    this._setCoreData(dateValue);
  }

  _setStringDate(strDate) {
    if(/\d{0,4}-\d{0,2}-\d{0,2}/.test(strDate)) {
      const year = Number(strDate.split('-')[0]);
      const month = Number(strDate.split('-')[1]);
      const day = Number(strDate.split('-')[2].substr(0, 2));

      if(/\d{0,4}-\d{0,2}-\d{0,2}\ \d{0,2}\:\d{0,2}\:\d{0,2}/.test(strDate)) {
        const hour = Number(strDate.split(' ')[1].split(':')[0]);
        const minute = Number(strDate.split(' ')[1].split(':')[1]);
        const second = Number(strDate.split(' ')[1].split(':')[2]);
        return new Date(year, month-1, day, hour, minute, second);
      }
      
      return new Date(year, month-1, day);
    }
    
    return new Date(strDate);
  }

  _setCoreData(dateValue) {
    this.date = typeof dateValue === 'undefined' ? new Date() : 
                typeof dateValue === 'number' ? new Date(dateValue) :
                this._setStringDate(dateValue);
    this.formatMap = new Map([
      [/mn/g, this.mn],
      [/MN/g, this.MN],
      [/ms/g, this.ms],
      [/MS/g, this.MS],
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
    this.addMap = new Map([
      ['years', this.addYears],
      ['months', this.addMonths],
      ['weeks', this.addWeeks],
      ['days', this.addDays],
      ['hours', this.addHours],
      ['minutes', this.addMinutes],
      ['seconds', this.addSeconds]
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

  addYears(thisLD, addValue) {
    const bD = new Core(thisLD.t);
    thisLD._setCoreData(new Date((bD.Y + addValue), (bD.m - 1), bD.d, bD.h, bD.mn, bD.s, bD.ms));
    return thisLD;
  }

  addMonths(thisLD, addValue) {
    const bD = new Core(thisLD.t);
    thisLD._setCoreData(new Date(bD.Y, (bD.m - 1 + addValue), bD.d, bD.h, bD.mn, bD.S, bD.ms));
    return thisLD;
  }

  addWeeks(thisLD, addValue) {
    const time = thisLD.t + (addValue * 7 * 24 * 60 * 60 * 1000);
    thisLD._setCoreData(time);
    return thisLD;
  }

  addDays(thisLD, addValue) {
    const time = thisLD.t + (addValue * 24 * 60 * 60 * 1000);
    thisLD._setCoreData(time);
    return thisLD;
  }

  addHours(thisLD, addValue) {
    const time = thisLD.t + (addValue * 60 * 60 * 1000);
    thisLD._setCoreData(time);
    return thisLD;
  }

  addMinutes(thisLD, addValue) {
    const time = thisLD.t + (addValue * 60 * 1000);
    thisLD._setCoreData(time);
    return thisLD;
  }

  addSeconds(thisLD, addValue) {
    const time = thisLD.t + (addValue * 1000);
    thisLD._setCoreData(time);
    return thisLD;
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
    const bD = new Core(baseTime);
    const tD = new Core(targetTime);
    const strBD = Number('' + bD.D + bD.H + bD.MN + bD.S + bD.MS);
    const strTD = Number('' + tD.D + tD.H + tD.MN + tD.S + tD.MS);
    const diffYear = tD.Y - bD.Y;
    const diffMonth = tD.M - bD.M;
    const sign = diffYear < 0 ? 1 : diffMonth < 0 ? 1 : -1;
    const diffSignMonth = (sign > 0 && strTD > strBD) || (sign <= 0 && strTD < strBD) ? diffMonth + sign : diffMonth;
    return diffYear === 0 ? diffSignMonth : diffSignMonth + (diffYear * 12);
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

export default Core;