// pinboardjs
// The pins place pins according to skin and
// coordiantes from the layouter
// 
// (c) patrick mulder, 2014

var _ = require('underscore');
var Layouter = require('./layouter.js');

Pins = function(s, options) {

  // reference to canvas for drawing
  this.svg = s;
  this.board = options.board;

  // basic board paramters from skin
  this.height = this.board.skin.pins.height;
  this.inner_width = this.board.skin.board.middle.inner_width;

  // pin render settings from skin 
  this.small = {};
  this.small.pinWidth = this.board.skin.pins.small.width;
  this.small.pinHeight = this.board.skin.pins.small.height;
  this.small.color = this.board.skin.pins.small.color;
  this.small.spacingX = this.board.skin.pins.small.spacingX;
  this.small.spacingY = this.board.skin.pins.small.spacingY;

  this.large = {};
  this.large.pinWidth = this.board.skin.pins.large.width;
  this.large.pinHeight = this.board.skin.pins.large.height;
  this.large.color = this.board.skin.pins.large.color;

  this.processor = {};
  this.processor.pinWidth = this.board.skin.processor.width;
  this.processor.pinHeight = this.board.skin.processor.height;
  this.processor.pinColor = this.board.skin.processor.height;

  this.initialize.apply(this, arguments);
};

// to override with custom initialization 
Pins.prototype.initialize = function() {}

Pins.prototype._renderPin = function(pin, skin) {

  var x = pin.x;
  var y = pin.y;
  var w = skin.pinWidth;
  var h = skin.pinHeight; 
  var color = skin.color;

  r = this.svg.rect(x, y, w, h);

  r.attr({fill: color, stroke: '#000000'});
  r.click(function(e) {
    var node = e.currentTarget;
    Snap(node).attr({fill: 'yellow'});
  });
}

// render the pins
Pins.prototype.render = function() {

  var offsetX = this.xOffset;
  var offsetY = this.yOffset; 

  var options = {
    spacingX: this.small.spacingX,
    spacingY: this.small.spacingY,
    height: this.height,
    verticalOffset: this.verticalOffset,
    rawPins: this.board,
    innerWidth: this.inner_width
  };

  // instantiate a layouter
  var layouter = new Layouter(options);
  layouter.calcCoord();
  
  var pins = layouter.coords; 

  var that = this;

  // draw pins
  pins.forEach(function(pin) {

    if (pin.type == 'large') {
      that._renderPin(pin, that.large); 
    } else if (pin.type == 'processor') {
      that._renderPin(pin, that.processor);
    } else {
      that._renderPin(pin, that.small);
    }
   
    var label = s.text(pin.x, pin.y - 5, pin.name);
    label.attr({fill: '#ffffff', stroke: 'none'});
  });
}
module.exports = Pins;
