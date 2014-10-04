
s.js:
	browserify -r ./s.js:svg > static/s.js
	
pinData.js:
	browserify -r ./pins.json:pinData > static/pinData.js

board.js:
	browserify -r ./drawBoard.js:board > static/board.js

pins.js:
	browserify -r ./drawPins.js:pins > static/pins.js

calcPins.js:
	browserify -r ./calcPins.js:calcPins > static/calcPins.js

all: s.js pinData.js pins.js calcPins.js board.js
	browserify ./app/main.js > static/bundle.js
