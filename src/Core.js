class Core {

  constructor(dateValue) {
    this.date = typeof dateValue === 'undefined' ? new Date() : 
                typeof dateValue === 'object' ? dateValue : new Date(dateValue);
  }

  _doubleFigures(figure) {
    return figure < 10 ? '0' + figure : figure;
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