
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
