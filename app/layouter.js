// pinboardjs
// The Layouter calculates the positions of pins.
// 
// (c) patrick mulder, 2014

var _ = require('underscore');

function _translate(coords, x, y) {

  return coords.map(function(coord) {
    coord.x += x;
    coord.y += y;
    return coord;
  });

}

var Layouter = function(spacingX, spacingY, height, rawPins) {
  this.spacingX = spacingX;
  this.spacingY = spacingY;
  this.rawPins = rawPins;
  this.height = height;
  this.coords = [];
};

Layouter.prototype._resolveVertical = function(rawPins, spacingX, spacingY) {
  var length = rawPins.length;
  var yOffset = 50;

  var i = 1;
  var that = this;
  var coords = rawPins.map(function(pin) {
    i++;
    pin.y = yOffset + spacingY * i; 
    pin.x = spacingX;
    return pin;
  })
  return coords;
}

Layouter.prototype.calcEast = function() {
  var rawPins = this.rawPins.east;

  var spacingX = this.spacingX;
  var spacingY = this.spacingY;

  this.coords.push(this._resolveVertical(rawPins, spacingX, spacingY));
}

Layouter.prototype._placePin = function(pin, rawPins, i) {
    var length = rawPins.length;
    var name = rawPins[length - i +1].name; // count backward
    if (name != "") {
      return {
        x: i * this.spacingX,
        y: this.spacingY,
        name: name 
      }
    }
}

Layouter.prototype.calcNorth = function() {
  var rawPins = this.rawPins.north;

  var spacingX = this.spacingX;
  var spacingY = this.spacingY;

  var i = 1;
  var that = this;
  var coords = rawPins.map(function(pin) {
    i++;
    return that._placePin(pin, rawPins, i);
  });
  coords = _.chain(coords).flatten().compact().value();

  this.coords.push(coords);
}

Layouter.prototype.calcSouth = function() {
  var rawPins = this.rawPins.south;

  var spacingX = this.spacingX;
  var spacingY = this.spacingY;

  var i = 1;
  var that = this;
  var coords = rawPins.map(function(pin) {
    i++;
    return that._placePin(pin, rawPins, i);
  });
  coords = _.chain(coords).flatten().compact().value();

  coords = _translate(coords, 0, this.height);
  this.coords.push(coords);
}

Layouter.prototype.calcEast = function() {
  var rawPins = this.rawPins.east;

  var spacingX = this.spacingX;
  var spacingY = this.spacingY;

  var coords = this._resolveVertical(rawPins, spacingX, spacingY);

  coords = _.chain(coords).flatten().compact().value();

  coords = _translate(coords, 670, 0);
  this.coords.push(coords);
}

Layouter.prototype.calcWest = function() {
  var rawPins = this.rawPins.west;

  var spacingX = this.spacingX;
  var spacingY = this.spacingY;

  var coords = this._resolveVertical(rawPins, spacingX, spacingY);
  this.coords.push(coords);
}


Layouter.prototype.calcCoord = function() {
  this.calcEast();
  this.calcSouth();
  this.calcNorth();
  this.calcWest();
  this.coords = _.chain(this.coords).flatten().compact().value();
}


module.exports = Layouter;
