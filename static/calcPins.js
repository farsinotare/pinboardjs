require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"BGCjEO":[function(require,module,exports){

function lookupName() {
  return rawPins.length - i + 2 
}


var PinsLayout = function(spacingX, spacingY, rawPins) {
  this.spacingX = spacingX;
  this.spacingY = spacingY;
  this.rawPins = rawPins;
  this.coords = [];
};

PinsLayout.prototype._resolveCoords = function(rawPins, spacingX, spacingY) {
  var length = rawPins.length;
  var i = 1;

  var coords = rawPins.map(function(pin) {
    i++;
    return {
      y: (i % 2 == 0) ? i * spacingY : ( i - 1) * spacingY,
      x: (i % 2 == 0) ? spacingX : 2 * spacingX,
      name: rawPins[length - i +1].name
    }
  })

}

PinsLayout.prototype.calcEast = function() {
  var rawPins = this.rawPins.east;

  var spacingX = this.spacingX;
  var spacingY = this.spacingY;

  return this._resolveCoords(rawPins, spacingX, spacingY);
}

PinsLayout.prototype.calcNorth = function() {
  var rawPins = this.rawPins.east;

  var spacingX = this.spacingX;
  var spacingY = this.spacingY;

  return this._resolveCoords(rawPins, spacingX, spacingY);
}

PinsLayout.prototype.calcSouth = function() {
  var rawPins = this.rawPins.east;

  var spacingX = this.spacingX;
  var spacingY = this.spacingY;

  return this._resolveCoords(rawPins, spacingX, spacingY);
}

PinsLayout.prototype.calcWest = function() {
  var rawPins = this.rawPins.east;

  var spacingX = this.spacingX;
  var spacingY = this.spacingY;

  return this._resolveCoords(rawPins, spacingX, spacingY);
}


PinsLayout.prototype.calcPins = function() {
  this.calcEast();
  this.calcSouth();
  this.calcNorth();
  this.calcWest();
}


module.exports = PinsLayout;

},{}],"calcPins":[function(require,module,exports){
module.exports=require('BGCjEO');
},{}]},{},[])