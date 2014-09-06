require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"BGCjEO":[function(require,module,exports){

function calcPins(spacingX, spacingY, rawPins) {
  i = 1;
  var coords = rawPins.map(function(pin) {
    i++;
    return { y: (i % 2 == 0) ? i * spacingY : ( i - 1) * spacingY, x: (i % 2 == 0) ? spacingX : 2 * spacingX }
  })
  return coords;
}
module.exports = calcPins;

},{}],"calcPins":[function(require,module,exports){
module.exports=require('BGCjEO');
},{}]},{},[])