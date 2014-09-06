
var xOffset = 20;
var yOffset = 5;

function drawBoard(width, height, s) {
  r = s.rect(xOffset, yOffset, width, height);
  r.attr({fill: '#cccccc', stroke: "#000"});
}

module.exports = drawBoard;

