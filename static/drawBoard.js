require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"tG3gHH":[function(require,module,exports){

var xOffset = 20;
var yOffset = 5;

function drawBoard(xOffset, yOffset, s) {
  var north = s.rect(30 + xOffset, 60 + yOffset, 600, 30);
  north.attr({fill: '#cccccc', stroke: "#000"});

  var south = s.rect(30 + xOffset, 90 + yOffset, 90, 220);
  south.attr({fill: '#cccccc', stroke: "#000"});
  
  var east = s.rect(540 + xOffset, 90 + yOffset, 90, 220);
  east.attr({fill: '#cccccc', stroke: "#000"});
  
  var west = s.rect(30 + xOffset, 310 + yOffset, 600, 30);
  west.attr({fill: '#cccccc', stroke: "#000"});
}

module.exports = drawBoard;


},{}],"drawBoard":[function(require,module,exports){
module.exports=require('tG3gHH');
},{}]},{},[])