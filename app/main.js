
var rawPins = require('../pins.json');
var calcPins = require('../calcPins.js');

var Snap  = require('snapsvg');
var s = new Snap('#main');

var pins = calcPins(10, 20, rawPins);


var ic_74hc595 = { "name": "74HC595", "pin_count": 8, "pins": [{"no": 1, "name": "GND"}] };




var i = 0;
var r;




var p = s.path("M10 400L90 90");
p.attr({stroke: '#000'});

