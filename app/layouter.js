// pinboardjs
// The Layouter calculates the positions of pins.
// Here goes the main logic for calculating the placement of pins.
// 
// (c) patrick mulder, 2014

var _ = require('underscore');

// constructor taking parameters from skin
var Layouter = function(options) {

  this.spacingX = options.spacingX;
  this.spacingY = options.spacingY;

  // take pin data from board.json
  this.boardJson = options.rawPins; 
  this.height = options.height;
  this.innerWidth = options.innerWidth;

  this.verticalOffset = options.verticalOffset;

  // the place for the coordinates
  this.coords = [];
};

// calculate positions of pins for vertical placement
Layouter.prototype._resolveVertical = function(group) {

  var pins = group.pins;
  var x = group.position.x;
  var y = group.position.y;
  var spacingX = group.position.spacingX || 0;
  var spacingY = group.position.spacingY || 0;

  var coords = [];
  var that = this;

  for (var i=0; i < pins.length; i++) {
    var coord = pins[i];
  
    if (coord.name) {
      coord.y = y + spacingY * i; 
      coord.x = x + spacingX;
      coords.push(coord);
    }
  };

  return coords;
}

// calculate positions of pins for horizontal placement
Layouter.prototype._resolveHorizontal = function(group) {

  var pins = group.pins;
  var x = group.position.x;
  var y = group.position.y;
  var spacingX = group.position.spacingX || 0;
  var spacingY = group.position.spacingY || 0;

  var coords = [];
  var that = this;
  for (var i=0; i < pins.length; i++) {
    var pin = pins[i];
    if (pin.name) {
      pin.x = x + spacingX * i;
      pin.y = y; 
      coords.push(pin);
    }
  };

  return coords;
}

// get pins of a pingroup
Layouter.prototype._findGroup = function(name) {
  var pingroup = _.find(this.boardJson.pingroups, {'name': name});

  // return pins if found, otherwise empty array
  var group = {};
  group.pins = _.has(pingroup, 'pins') ? pingroup.pins : {};
  group.position = _.has(pingroup, 'position') ? pingroup.position : {};
  return group;
}

// place pin and attach label to pin
Layouter.prototype._placePin = function(pin, boardJson, i) {
    var length = boardJson.length;
    var pin = boardJson[i-1];
 
    var name = _.has(pin, 'name') ? pin.name : ''; 
    if (name) {
      return {
        x: i * this.spacingX,
        y: this.spacingY,
        name: name 
      }
    }
}

Layouter.prototype.calcGroup = function(group) {

  if (!group.pins || group.pins.length === 0) {
    return;
  }

  var coords;

  if (group.direction == 'horizontal') {
    coords = this._resolveHorizontal(group);
  } else {
    coords = this._resolveVertical(group);
  }
  this.coords.push(coords);

}


Layouter.prototype.calcCoord = function() {

  var names = _.map(this.boardJson.pingroups, function(p) { 
    return p.name;
  });

  var that = this;
  names.forEach(function(name) {
    var group = _.find(that.boardJson.pingroups, {name: name});
    that.calcGroup(group);
  });

  // flatten array and remove duplicates
  this.coords = _.chain(this.coords).flatten().compact().value();
}

// helper function to shift pins along an axis
function _translate(coords, x, y) {

  return coords.map(function(coord) {
    coord.x += x;
    coord.y += y;
    return coord;
  });
}



module.exports = Layouter;
