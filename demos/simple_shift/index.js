var Pinplacer = require('../..');

var simple_board = {
    title: "simple",
    "components": [
       {
         "name": "board",
         "drawings": {
           "type": "segment",
           "Xstart": 10,
           "Xend": 410,
           "Ystart": 20,
           "Yend": 420,
           "color": "#401064",
           "width": 0
         }
      },
      {
        "name": "shift1",
        "drawings": {
          "type": "dip-8",
          "Xstart": 100,
          "Ystart": 120,
          "Xend": 130,
          "Yend": 150,
          "color": "#000000",
          "width": 0
        }
      }
    ]
};

Pinplacer.bootstrap('#main', simple_board, {modules: [
      require('./dip-8.json') ]});
