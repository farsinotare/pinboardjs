
var calcPins = require('./calcPins.js');
var rawPins = require('./pins.json');

var pinHeight = 20;
var pinWidth = 20;

var spacingX = 30;
var spacingY = 30;


var pins = calcPins(spacingX, spacingY, rawPins);

var placePins = function(offsetX, offsetY, s) {
  pins.forEach(function(pin) {
    r = s.rect(offsetX + pin.x, offsetY + pin.y, pinWidth, pinHeight);
    r.attr({fill: 'white', stroke: "#000"});
   
    s.text(offsetX + pin.x, offsetY + pin.y, pin.name);
  });
}
module.exports = placePins;
