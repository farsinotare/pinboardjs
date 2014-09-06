
s.js:
	browserify -r ./s.js:svg > static/s.js
	
pins.js:
	browserify -r ./pins.json:pins > static/pins.js

drawBoard.js:
	browserify -r ./drawBoard.js:drawBoard > static/drawBoard.js

drawPins.js:
	browserify -r ./drawPins.js:drawPins > static/drawPins.js

calcPins.js:
	browserify -r ./calcPins.js:calcPins > static/calcPins.js

all: s.js pins.js drawPins.js calcPins.js drawBoard.js
	browserify ./app/main.js > static/bundle.js


