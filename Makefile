.PHONY: all

s:
	browserify -r ./app/s.js:svg > static/s.js
	
arduino_uno:
	browserify -r ./arduino_uno.json:arduino_uno > static/arduino_uno.js

tessel:
	browserify -r ./tessel.json:tessel > static/tessel.js

board:
	browserify -r ./app/board.js:board > static/board.js

pins:
	browserify -r ./app/pins.js:pins > static/pins.js

layouter:
	browserify -r ./app/layouter.js:layouter > static/layouter.js

all: static/s.js static/pinData.js pins layouter board
