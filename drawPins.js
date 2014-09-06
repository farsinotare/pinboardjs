
var pinHeight = 20;
var pinWidth = 20;

var drawPins = function(pins, s) {
  pins.forEach(function(pin) {
    r = s.rect(pin.x, pin.y, pinWidth, pinHeight);
    r.attr({fill: 'white', stroke: "#000"});
   
    s.text(pin.x, pin.y, pin.name);
  });
}
module.exports = drawPins;
