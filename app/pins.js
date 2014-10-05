var _ = require('underscore');
var Layouter = require('./layouter.js');

var pinHeight = 20;
var pinWidth = 20;

var spacingX = 40;
var spacingY = 40;

Pins = function(s, options) {

  this.svg = s;
  this.board = options.board;

  // basic paramters from skin
  this.xOffset = this.board.skin.pins.offset.x;
  this.yOffset = this.board.skin.pins.offset.y;
  this.height = this.board.skin.pins.height;

  this.initialize.apply(this, arguments);
};

// to override with custom initialization 
Pins.prototype.initialize = function() {}

// render the pins
Pins.prototype.render = function() {

  var offsetX = this.xOffset;
  var offsetY = this.yOffset; 
  var height = this.height;

  var layouter = new Layouter(spacingX, spacingY, height, this.board);
  layouter.calcCoord();
  
  var pins = layouter.coords; 

  var that = this;
  pins.forEach(function(pin) {
    r = that.svg.rect(offsetX + pin.x, offsetY + pin.y, pinWidth, pinHeight);
    r.attr({fill: 'white', stroke: "#000"});
   
    s.text(offsetX + pin.x, offsetY + pin.y, pin.name);
  });
}
module.exports = Pins;
