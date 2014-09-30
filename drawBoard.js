var _ = require('underscore');

var xOffset = 20;
var yOffset = 5;

var northHeight = 60;
var verticalHeight = 220; 
var verticalWidth = 90;
var outerWidth = 660 + verticalWidth; 

function drawBoard(s, opts) {

  var xOffset = opts.xOffset;
  var yOffset = opts.yOffset;

  var north = s.rect(xOffset, yOffset, outerWidth, northHeight);
  north.attr({fill: '#cccccc', stroke: "#000"});

  var west = s.rect(xOffset, 60 + yOffset, verticalWidth, verticalHeight);
  west.attr({fill: '#cccccc', stroke: "#000"});
  
  var east = s.rect(outerWidth + xOffset - verticalWidth, northHeight + yOffset, verticalWidth, verticalHeight);
  east.attr({fill: '#cccccc', stroke: "#000"});
  
  var south = s.rect(xOffset, 280 + yOffset, outerWidth, northHeight);
  south.attr({fill: '#cccccc', stroke: "#000"});
}

module.exports = drawBoard;

