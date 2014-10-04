
static/s.js:
	browserify -r ./app/s.js:svg > static/s.js
	
static/pinData.js:
	browserify -r ./pins.json:pinData > static/pinData.js

static/board.js:
	browserify -r ./app/board.js:board > static/board.js

static/pins.js:
	browserify -r ./app/pins.js:pins > static/pins.js

static/layouter.js:
	browserify -r ./app/layouter.js:layouter > static/layouter.js

all: static/s.js static/pinData.js static/pins.js static/layouter.js static/board.js
