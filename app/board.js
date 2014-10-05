// pinboardjs
// The Board draws shapes of a PCB upon which pins are placed.
// 
// (c) patrick mulder, 2014

var _ = require('underscore');

Board = function(canvas, options) {

  this.canvas = canvas;
  this.skin_board = options.skin.board; 

  this.initialize.apply(this, arguments);
};

Board.prototype.initialize = function(s, options) {

  // derive basic layout parameters from skin
  this.xOffset = this.skin_board.offset.x;
  this.yOffset = this.skin_board.offset.y;

  this.northHeight = this.skin_board.north.height;
  this.verticalHeight = this.skin_board.middle.height;
  this.verticalWidth = this.skin_board.middle.outer_width;
  this.outerWidth = this.skin_board.middle.inner_width + this.verticalWidth;

  this.background = this.skin_board.background;
}

// render the board with individual rectangles
Board.prototype.render = function() {

  var xOffset = this.xOffset;
  var yOffset = this.yOffset;

  var north = this.canvas.rect(xOffset, yOffset, this.outerWidth, this.northHeight);
  north.attr({fill: this.background, stroke: "#000"});

  var west = this.canvas.rect(xOffset, 60 + yOffset, this.verticalWidth, this.verticalHeight);
  west.attr({fill: this.background, stroke: "#000"});
  
  var east = this.canvas.rect(this.outerWidth + xOffset - this.verticalWidth, this.northHeight + this.yOffset, this.verticalWidth, this.verticalHeight);
  east.attr({fill: this.background, stroke: "#000"});
  
  var south = this.canvas.rect(xOffset, 280 + yOffset, this.outerWidth, this.northHeight);
  south.attr({fill: this.background, stroke: "#000"});

  var middle = this.canvas.rect(xOffset + this.verticalWidth, yOffset + this.northHeight, this.outerWidth - 2 * this.verticalWidth, this.verticalHeight);
  middle.attr({fill: this.background, stroke: "#000"});
}

module.exports = Board;

