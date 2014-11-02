var Pinplacer = require('../..');

var simple_board = {
    title: "simple",
    "components": [
       {
         "name": "board",
         "drawings": {
           "type": "segment",
           "Xstart": 10,
           "Ystart": 20,
           "Xend": 300,
           "Yend": 400,
           "color": "#CCCCCC",
           "width": 10
         }
      }
    ]
};

Pinplacer.bootstrap('#main', simple_board);
