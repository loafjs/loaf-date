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
      ['days', this.diffDays],
    ]);
  }

  _doubleFigures(figure) {
    return figure < 10 ? '0' + figure : figure;
  }

  diffYears(baseTime, targetTime){
    
  }

  diffMonths(baseTime, targetTime){
    
  }

  diffDays(baseTime, targetTime) {
    return parseInt((targetTime - baseTime)/1000/60/60/24, 10);
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