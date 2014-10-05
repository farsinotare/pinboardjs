// pinboardjs
// The Layouter calculates the positions of pins.
// Here goes the main logic for calculating the placement of pins.
// 
// (c) patrick mulder, 2014

var _ = require('underscore');

// helper function to shift pins along an axis
function _translate(coords, x, y) {

  return coords.map(function(coord) {
    coord.x += x;
    coord.y += y;
    return coord;
  });
}

// constructor
var Layouter = function(options) {
  this.spacingX = options.spacingX;
  this.spacingY = options.spacingY;
  this.rawPins = options.rawPins;
  this.height = options.height;

  // the place for the coordinates
  this.coords = [];
};

// calculate positions of pins for vertical placement
Layouter.prototype._resolveVertical = function(rawPins, spacingX, spacingY) {
  var yOffset = 90;

  var coords = [];
  var that = this;
  for (var i=0; i < rawPins.length; i++) {
    var pin = rawPins[i];
    if (pin.name) {
      pin.y = yOffset + spacingY * i; 
      pin.x = spacingX;
      coords.push(pin);
    }
  };

  return coords;
}

// get pins of a pingroup
Layouter.prototype._findGroup = function(name) {
  var pingroup = _.find(this.rawPins.pingroups, {'name': name});

  // return pins if found, otherwise empty array
  return _.has(pingroup, 'pins') ? pingroup.pins : [];
}

Layouter.prototype._placePinAsc = function(pin, rawPins, i) {
    var length = rawPins.length;
    var name = rawPins[length - i +1].name; // count backward
    if (name) {
      return {
        x: i * this.spacingX,
        y: this.spacingY,
        name: name 
      }
    }
}

Layouter.prototype._placePin = function(pin, rawPins, i) {
    var length = rawPins.length;
    var pin = rawPins[i-1];
 
    var name = _.has(pin, 'name') ? pin.name : ''; 
    if (name) {
      return {
        x: i * this.spacingX,
        y: this.spacingY,
        name: name 
      }
    }
}

Layouter.prototype.calcNorth = function() {
  var rawPins = _.find(this.rawPins.pingroups, {'name':'north'}).pins;
  var rawPins = this._findGroup('north');

  var spacingX = this.spacingX;
  var spacingY = this.spacingY;

  var that = this;
  var coords = [];
  for (var i=0; i <= rawPins.length; i++) {
    var pin = rawPins[i];
    var coord = that._placePin(pin, rawPins, i);
    if (coord) {
      coords.push(coord);
    }
  };

  this.coords.push(coords);
}

Layouter.prototype.calcSouth = function() {
  var rawPins = this._findGroup('south');

  var spacingX = this.spacingX;
  var spacingY = this.spacingY;

  var coords = [];
  var that = this;
  for (var i=0; i <= rawPins.length; i++) {
    var pin = rawPins[i];
    var coord = that._placePin(pin, rawPins, i);
    if (coord) {
      coords.push(coord);
    }
  };

  coords = _translate(coords, 0, this.height);
  this.coords.push(coords);
}

Layouter.prototype.calcEast = function() {
  var rawPins = this._findGroup('east');

  var spacingX = this.spacingX;
  var spacingY = this.spacingY;

  var coords = this._resolveVertical(rawPins, spacingX, spacingY);

  coords = _.chain(coords).flatten().compact().value();

  coords = _translate(coords, 670, 0);
  this.coords.push(coords);
}

Layouter.prototype.calcWest = function() {
  var rawPins = this._findGroup('west');

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

  // flatten array and remove duplicates
  this.coords = _.chain(this.coords).flatten().compact().value();
}


module.exports = Layouter;
