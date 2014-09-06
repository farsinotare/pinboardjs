
var Snap  = require('snapsvg');

var s = new Snap('#main');


var pins = [
  { 'name': 'AREF',x: 100, y: 20 }, 
  { 'name': 'GND', x: 180, y: 20},

  { 'name': '13', x: 260, y: 20},
  { 'name': '12', x: 340, y: 20},
  { 'name': '11', x: 420, y: 20},
  { 'name': '10', x: 500, y: 20},
  { 'name': '9', x: 580, y: 20},
  { 'name': '8', x: 660, y: 20},

  { 'name': '7', x: 760, y: 20},
  { 'name': '6', x: 840, y: 20},
  { 'name': '5', x: 920, y: 20},
  { 'name': '4', x: 1000, y: 20},
  { 'name': '3', x: 1160, y: 20},
  { 'name': '2', x: 1260, y: 20},
  { 'name': '1', x: 1360, y: 20},
  { 'name': '0', x: 1460, y: 20},

  { 'name': 'Vin', x: 500, y: 400},
  { 'name': 'GND', x: 580, y: 400},
  { 'name': 'GND', x: 480, y: 400},
  { 'name': '5V', x: 360, y: 400},
  { 'name': '3.3V', x: 260, y: 400},
  { 'name': 'RESET', x: 160, y: 400},

  { 'name': 'A5', x: 600, y: 400},
  { 'name': 'A4', x: 780, y: 400},
  { 'name': 'A3', x: 860, y: 400},
  { 'name': 'A2', x: 940, y: 400},
  { 'name': 'A1', x: 1020, y: 400},
  { 'name': 'A0', x: 1100, y: 400}


];


var ic_74hc595 = { "name": "74HC595", "pin_count": 8, "pins": [{"no": 1, "name": "GND"}] };



r = s.rect(20, 5, 1400, 800);
r.attr({fill: '#cccccc', stroke: "#000"});


var i = 0;
var r;


pins.forEach(function(a) {
  r = s.rect(a.x, a.y, 40, 100);
  r.attr({fill: 'white', stroke: "#000"});
 
  s.text(a.x, a.y, a.name);
});




var p = s.path("M10 400L90 90");
p.attr({stroke: '#000'});

