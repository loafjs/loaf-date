"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Core = /*#__PURE__*/function () {
  function Core(dateValue) {
    _classCallCheck(this, Core);

    this._setCoreData(dateValue);
  }

  _createClass(Core, [{
    key: "_setStringDate",
    value: function _setStringDate(strDate) {
      if (/\d{0,4}-\d{0,2}-\d{0,2}/.test(strDate)) {
        var year = Number(strDate.split('-')[0]);
        var month = Number(strDate.split('-')[1]);
        var day = Number(strDate.split('-')[2].substr(0, 2));

        if (/\d{0,4}-\d{0,2}-\d{0,2}\ \d{0,2}\:\d{0,2}\:\d{0,2}/.test(strDate)) {
          var hour = Number(strDate.split(' ')[1].split(':')[0]);
          var minute = Number(strDate.split(' ')[1].split(':')[1]);
          var second = Number(strDate.split(' ')[1].split(':')[2]);
          return new Date(year, month - 1, day, hour, minute, second);
        }

        return new Date(year, month - 1, day);
      }

      return new Date(strDate);
    }
  }, {
    key: "_setCoreData",
    value: function _setCoreData(dateValue) {
      this.date = typeof dateValue === 'undefined' ? new Date() : typeof dateValue === 'number' ? new Date(dateValue) : this._setStringDate(dateValue);
      this.formatMap = new Map([[/mn/g, this.mn], [/MN/g, this.MN], [/ms/g, this.ms], [/MS/g, this.MS], [/y/g, this.y], [/Y/g, this.Y], [/m/g, this.m], [/M/g, this.M], [/d/g, this.d], [/D/g, this.D], [/h/g, this.h], [/H/g, this.H], [/s/g, this.s], [/S/g, this.S], [/t/g, this.t], [/w/g, this.w], [/W/g, this.W]]);
      this.addMap = new Map([['years', this.addYears], ['months', this.addMonths], ['weeks', this.addWeeks], ['days', this.addDays], ['hours', this.addHours], ['minutes', this.addMinutes], ['seconds', this.addSeconds]]);
      this.diffMap = new Map([['years', this.diffYears], ['months', this.diffMonths], ['weeks', this.diffWeeks], ['days', this.diffDays], ['hours', this.diffHours], ['minutes', this.diffMinutes], ['seconds', this.diffSeconds]]);
    }
  }, {
    key: "_doubleFigures",
    value: function _doubleFigures(figure) {
      return figure < 10 ? '0' + figure : figure;
    }
  }, {
    key: "_fourDigitsFigures",
    value: function _fourDigitsFigures(figure) {
      var digits = String(figure).length;
      return digits > 2 ? figure : digits > 1 ? '0' + figure : '00' + figure;
    }
  }, {
    key: "addYears",
    value: function addYears(thisLD, addValue) {
      var bD = new Core(thisLD.t);

      thisLD._setCoreData(new Date(bD.Y + addValue, bD.m - 1, bD.d, bD.h, bD.mn, bD.s, bD.ms));

      return thisLD;
    }
  }, {
    key: "addMonths",
    value: function addMonths(thisLD, addValue) {
      var bD = new Core(thisLD.t);

      thisLD._setCoreData(new Date(bD.Y, bD.m - 1 + addValue, bD.d, bD.h, bD.mn, bD.S, bD.ms));

      return thisLD;
    }
  }, {
    key: "addWeeks",
    value: function addWeeks(thisLD, addValue) {
      var time = thisLD.t + addValue * 7 * 24 * 60 * 60 * 1000;

      thisLD._setCoreData(time);

      return thisLD;
    }
  }, {
    key: "addDays",
    value: function addDays(thisLD, addValue) {
      var time = thisLD.t + addValue * 24 * 60 * 60 * 1000;

      thisLD._setCoreData(time);

      return thisLD;
    }
  }, {
    key: "addHours",
    value: function addHours(thisLD, addValue) {
      var time = thisLD.t + addValue * 60 * 60 * 1000;

      thisLD._setCoreData(time);

      return thisLD;
    }
  }, {
    key: "addMinutes",
    value: function addMinutes(thisLD, addValue) {
      var time = thisLD.t + addValue * 60 * 1000;

      thisLD._setCoreData(time);

      return thisLD;
    }
  }, {
    key: "addSeconds",
    value: function addSeconds(thisLD, addValue) {
      var time = thisLD.t + addValue * 1000;

      thisLD._setCoreData(time);

      return thisLD;
    }
  }, {
    key: "diffYears",
    value: function diffYears(baseTime, targetTime) {
      var bD = new Core(baseTime);
      var tD = new Core(targetTime);
      var strBD = Number('' + bD.M + bD.D + bD.H + bD.MN + bD.S + bD.MS);
      var strTD = Number('' + tD.M + tD.D + tD.H + tD.MN + tD.S + tD.MS);
      var diffYear = tD.Y - bD.Y;
      var sign = diffYear < 0 ? 1 : -1;
      return sign > 0 && strTD > strBD || sign <= 0 && strTD < strBD ? diffYear + sign : diffYear;
    }
  }, {
    key: "diffMonths",
    value: function diffMonths(baseTime, targetTime) {
      var bD = new Core(baseTime);
      var tD = new Core(targetTime);
      var strBD = Number('' + bD.D + bD.H + bD.MN + bD.S + bD.MS);
      var strTD = Number('' + tD.D + tD.H + tD.MN + tD.S + tD.MS);
      var diffYear = tD.Y - bD.Y;
      var diffMonth = tD.M - bD.M;
      var sign = diffYear < 0 ? 1 : diffMonth < 0 ? 1 : -1;
      var diffSignMonth = sign > 0 && strTD > strBD || sign <= 0 && strTD < strBD ? diffMonth + sign : diffMonth;
      return diffYear === 0 ? diffSignMonth : diffSignMonth + diffYear * 12;
    }
  }, {
    key: "diffWeeks",
    value: function diffWeeks(baseTime, targetTime) {
      return parseInt((targetTime - baseTime) / 1000 / 60 / 60 / 24 / 7, 10);
    }
  }, {
    key: "diffDays",
    value: function diffDays(baseTime, targetTime) {
      return parseInt((targetTime - baseTime) / 1000 / 60 / 60 / 24, 10);
    }
  }, {
    key: "diffHours",
    value: function diffHours(baseTime, targetTime) {
      return parseInt((targetTime - baseTime) / 1000 / 60 / 60, 10);
    }
  }, {
    key: "diffMinutes",
    value: function diffMinutes(baseTime, targetTime) {
      return parseInt((targetTime - baseTime) / 1000 / 60, 10);
    }
  }, {
    key: "diffSeconds",
    value: function diffSeconds(baseTime, targetTime) {
      return parseInt((targetTime - baseTime) / 1000, 10);
    }
  }, {
    key: "y",
    get: function get() {
      var Y = String(this.Y);
      return Number(Y[2] + Y[3]);
    }
  }, {
    key: "Y",
    get: function get() {
      return this.date.getFullYear();
    }
  }, {
    key: "m",
    get: function get() {
      return this.date.getMonth() + 1;
    }
  }, {
    key: "M",
    get: function get() {
      return this._doubleFigures(this.m);
    }
  }, {
    key: "d",
    get: function get() {
      return this.date.getDate();
    }
  }, {
    key: "D",
    get: function get() {
      return this._doubleFigures(this.d);
    }
  }, {
    key: "h",
    get: function get() {
      return this.date.getHours();
    }
  }, {
    key: "H",
    get: function get() {
      return this._doubleFigures(this.h);
    }
  }, {
    key: "mn",
    get: function get() {
      return this.date.getMinutes();
    }
  }, {
    key: "MN",
    get: function get() {
      return this._doubleFigures(this.mn);
    }
  }, {
    key: "s",
    get: function get() {
      return this.date.getSeconds();
    }
  }, {
    key: "S",
    get: function get() {
      return this._doubleFigures(this.s);
    }
  }, {
    key: "ms",
    get: function get() {
      return this.date.getMilliseconds();
    }
  }, {
    key: "MS",
    get: function get() {
      return this._fourDigitsFigures(this.ms);
    }
  }, {
    key: "t",
    get: function get() {
      return this.date.getTime();
    }
  }, {
    key: "w",
    get: function get() {
      return this.date.getDay();
    }
  }, {
    key: "W",
    get: function get() {
      return this.w === 0 ? 6 : this.w - 1;
    }
  }]);

  return Core;
}();

var _default = Core;
exports["default"] = _default;