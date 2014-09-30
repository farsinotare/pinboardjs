var _ = require('underscore');
var PinsLayout = require('./calcPins.js');
var rawPins = require('./pins.json');

var pinHeight = 20;
var pinWidth = 20;

var spacingX = 40;
var spacingY = 40;

var placePins = function(s, opts) {
  var offsetX = opts.xOffset;
  var offsetY = opts.yOffset; 
  var height = opts.height;

  var pinsLayout = new PinsLayout(spacingX, spacingY, height, rawPins);
  pinsLayout.calcCoord();
  
  var pins = pinsLayout.coords; 

  pins.forEach(function(pin) {
    r = s.rect(offsetX + pin.x, offsetY + pin.y, pinWidth, pinHeight);
    r.attr({fill: 'white', stroke: "#000"});
   
    s.text(offsetX + pin.x, offsetY + pin.y, pin.name);
  });
}
module.exports = placePins;
