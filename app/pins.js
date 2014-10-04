var _ = require('underscore');
var Layouter = require('./layouter.js');

var pinHeight = 20;
var pinWidth = 20;

var spacingX = 40;
var spacingY = 40;

Pins = function() {};

Pins.prototype.initialize = function(s, options) {
  this.svg = s;
  this.rawPins = options.rawPins;

  this.xOffset = options.rawPins.skin.pins.offset.x;
  this.yOffset = options.rawPins.skin.pins.offset.y;
  this.height = options.rawPins.skin.pins.height;

}

Pins.prototype.place = function() {
  var offsetX = this.xOffset;
  var offsetY = this.yOffset; 
  var height = this.height;

  var pinsLayout = new Layouter(spacingX, spacingY, height, this.rawPins);
  pinsLayout.calcCoord();
  
  var pins = pinsLayout.coords; 

  var that = this;
  pins.forEach(function(pin) {
    r = that.svg.rect(offsetX + pin.x, offsetY + pin.y, pinWidth, pinHeight);
    r.attr({fill: 'white', stroke: "#000"});
   
    s.text(offsetX + pin.x, offsetY + pin.y, pin.name);
  });
}
module.exports = Pins;
