(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var moduleTest = require("./module").moduleTest;


var test = new moduleTest();

test.showConsoleLog();

},{"./module":2}],2:[function(require,module,exports){
"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var moduleTest = exports.moduleTest = (function () {
  function moduleTest() {
    _classCallCheck(this, moduleTest);
  }

  _prototypeProperties(moduleTest, null, {
    showConsoleLog: {
      value: function showConsoleLog() {
        console.log("ES6 module test!");
      },
      writable: true,
      configurable: true
    }
  });

  return moduleTest;
})();
Object.defineProperty(exports, "__esModule", {
  value: true
});

},{}]},{},[1]);
