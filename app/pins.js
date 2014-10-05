var _ = require('underscore');
var Layouter = require('./layouter.js');

var spacingX = 40;
var spacingY = 40;

Pins = function(s, options) {

  this.svg = s;
  this.board = options.board;

  // basic paramters from skin
  this.xOffset = this.board.skin.pins.offset.x;
  this.yOffset = this.board.skin.pins.offset.y;
  this.verticalOffset = this.board.skin.pins.offset.vertical;
  this.height = this.board.skin.pins.height;
  this.inner_width = this.board.skin.board.middle.inner_width;

  this.small = {};
  this.small.pinWidth = this.board.skin.pins.small.width;
  this.small.pinHeight = this.board.skin.pins.small.height;
  this.small.color = this.board.skin.pins.small.color;

  this.large = {};
  this.large.pinWidth = this.board.skin.pins.large.width;
  this.large.pinHeight = this.board.skin.pins.large.height;
  this.large.color = this.board.skin.pins.large.color;

  this.initialize.apply(this, arguments);
};

// to override with custom initialization 
Pins.prototype.initialize = function() {}

Pins.prototype._renderPin = function(x, y, w, h, color) {
  r = this.svg.rect(x, y, w, h);
  r.attr({fill: color, stroke: '#000000'});
}

// render the pins
Pins.prototype.render = function() {

  var offsetX = this.xOffset;
  var offsetY = this.yOffset; 

  var options = {
    spacingX: spacingX,
    spacingY: spacingY,
    height: this.height,
    verticalOffset: this.verticalOffset,
    rawPins: this.board,
    innerWidth: this.inner_width
  };
  var layouter = new Layouter(options);
  layouter.calcCoord();
  
  var pins = layouter.coords; 

  var that = this;
  pins.forEach(function(pin) {
    if (pin.type == 'large') {
      that._renderPin(offsetX + pin.x, offsetY + pin.y,
        that.large.pinWidth, that.large.pinHeight, that.large.color);
    } else {
      that._renderPin(offsetX + pin.x, offsetY + pin.y,
        that.small.pinWidth, that.small.pinHeight, that.small.color);
    }
   
    var label = s.text(offsetX + pin.x, offsetY + pin.y, pin.name);
    label.attr({fill: '#ffffff', stroke: 'none'});
  });
}
module.exports = Pins;
