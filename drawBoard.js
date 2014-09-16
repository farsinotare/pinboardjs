
var xOffset = 20;
var yOffset = 5;

function drawBoard(xOffset, yOffset, s) {
  var north = s.rect(30 + xOffset, 60 + yOffset, 600, 30);
  north.attr({fill: '#cccccc', stroke: "#000"});

  var south = s.rect(30 + xOffset, 90 + yOffset, 90, 220);
  south.attr({fill: '#cccccc', stroke: "#000"});
  
  var east = s.rect(540 + xOffset, 90 + yOffset, 90, 220);
  east.attr({fill: '#cccccc', stroke: "#000"});
  
  var west = s.rect(30 + xOffset, 310 + yOffset, 600, 30);
  west.attr({fill: '#cccccc', stroke: "#000"});
}

module.exports = drawBoard;

