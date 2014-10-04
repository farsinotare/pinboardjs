var _ = require('underscore');

var northHeight = 60;
var verticalHeight = 220; 
var verticalWidth = 90;

var outerWidth = 660 + verticalWidth; 

Board = function() {};

Board.prototype.initialize = function(s, options) {
  this.svg = s;

  this.xOffset = options.offset.x;
  this.yOffset = options.offset.y;

  this.northHeight = options.north.height;
  this.verticalHeight = options.middle.height;
  this.verticalWidth = options.middle.outer_width;
  this.outerWidth = options.middle.inner_width + this.verticalWidth;
}

Board.prototype.draw = function() {

  var xOffset = this.xOffset;
  var yOffset = this.yOffset;

  var north = this.svg.rect(xOffset, yOffset, this.outerWidth, this.northHeight);
  north.attr({fill: '#cccccc', stroke: "#000"});

  var west = this.svg.rect(xOffset, 60 + yOffset, this.verticalWidth, this.verticalHeight);
  west.attr({fill: '#cccccc', stroke: "#000"});
  
  var east = this.svg.rect(this.outerWidth + xOffset - this.verticalWidth, this.northHeight + this.yOffset, this.verticalWidth, this.verticalHeight);
  east.attr({fill: '#cccccc', stroke: "#000"});
  
  var south = this.svg.rect(xOffset, 280 + yOffset, this.outerWidth, this.northHeight);
  south.attr({fill: '#cccccc', stroke: "#000"});
}

module.exports = Board;

