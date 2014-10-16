.PHONY: all

s:
	browserify -r ./app/s.js:svg > static/s.js
	
arduino_uno:
	browserify -r ./arduino_uno.json:arduino_uno > static/arduino_uno.js

arduino_nano:
	browserify -r ./arduino_nano.json:arduino_nano > static/arduino_nano.js

arduino_mini:
	browserify -r ./arduino_mini.json:arduino_mini > static/arduino_mini.js

arduino_micro:
	browserify -r ./arduino_micro.json:arduino_micro > static/arduino_micro.js

ledlogics_one:
	browserify -r ./ledlogics_one.json:ledlogics_one > static/ledlogics_one.js

tessel:
	browserify -r ./tessel.json:tessel > static/tessel.js

board:
	browserify -r ./app/board.js:board > static/board.js

layouter:
	browserify -r ./app/layouter.js:layouter > static/layouter.js

pins:  layouter
	browserify -r ./app/pins.js:pins > static/pins.js

all: static/s.js static/pinData.js pins layouter board
