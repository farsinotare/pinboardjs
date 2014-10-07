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
  this.innerWidth = options.innerWidth;

  this.verticalOffset = options.verticalOffset;

  // the place for the coordinates
  this.coords = [];
};

// calculate positions of pins for vertical placement
Layouter.prototype._resolveVertical = function(rawPins, spacingX, spacingY) {

  var coords = [];
  var that = this;
  for (var i=0; i < rawPins.length; i++) {
    var pin = rawPins[i];
    if (pin.name) {
      pin.y = that.verticalOffset + spacingY * i; 
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
  var group = {};
  group.pins = _.has(pingroup, 'pins') ? pingroup.pins : {};
  group.position = _.has(pingroup, 'position') ? pingroup.position : {};
  return group;
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

// place pin and attach label to pin
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
  var rawPins = this._findGroup('north').pins;

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
  var rawPins = this._findGroup('south').pins;

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
  var rawPins = this._findGroup('east').pins;

  var spacingX = this.spacingX;
  var spacingY = this.spacingY;

  var coords = this._resolveVertical(rawPins, spacingX, spacingY);

  coords = _translate(coords, this.innerWidth, 0);
  this.coords.push(coords);
}

Layouter.prototype.calcWest = function() {
  var rawPins = this._findGroup('west').pins;

  var spacingX = this.spacingX;
  var spacingY = this.spacingY;

  var coords = this._resolveVertical(rawPins, spacingX, spacingY);
  this.coords.push(coords);
}

Layouter.prototype._resolveCenter = function(group) {
  var coords = [];
  var that = this;

  var coord = {};

  // only one component taken right now
  coord.name = group.pins[0].name;
  coord.type = group.pins[0].type;
  coord.x = group.position.x;
  coord.y = group.position.y;
  coords.push(coord);

  return coords;
}


// resolve coordinates of pins in center pingroup
Layouter.prototype.calcCenter = function() {
  var group = this._findGroup('center');

  var coords = this._resolveCenter(group);
  this.coords.push(coords);
}


Layouter.prototype.calcCoord = function() {
  this.calcEast();
  this.calcSouth();
  this.calcNorth();
  this.calcWest();
  this.calcCenter();

  // flatten array and remove duplicates
  this.coords = _.chain(this.coords).flatten().compact().value();
}


module.exports = Layouter;
