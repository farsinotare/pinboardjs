require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"drawPins":[function(require,module,exports){
module.exports=require('WdqFQt');
},{}],"WdqFQt":[function(require,module,exports){

var pinHeight = 20;
var pinWidth = 20;

var drawPins = function(pins, s) {
  pins.forEach(function(pin) {
    r = s.rect(pin.x, pin.y, pinWidth, pinHeight);
    r.attr({fill: 'white', stroke: "#000"});
   
    s.text(pin.x, pin.y, pin.name);
  });
}
module.exports = drawPins;

},{}]},{},[])