.PHONY: all

static/s.js:
	browserify -r ./app/s.js:svg > static/s.js
	
pinData:
	browserify -r ./pins.json:pinData > static/pinData.js

board:
	browserify -r ./app/board.js:board > static/board.js

pins:
	browserify -r ./app/pins.js:pins > static/pins.js

layouter:
	browserify -r ./app/layouter.js:layouter > static/layouter.js

all: static/s.js static/pinData.js pins layouter board
