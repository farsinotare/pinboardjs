var _ = require('underscore');


var Grid = function(s, options) {

  // reference to canvas for drawing
  this.svg = s;

  _.bindAll(this, '_renderHorizontal', '_renderVertical');

};

Grid.prototype._renderHorizontal = function(pos) {
  var l = this.svg.line(0, 10*pos, 1000, 10*pos);
  l.attr({'stroke-dasharray':'1, 3', fill:'none', stroke: '#cccccc', 'stroke-linecap':'round'});
}

Grid.prototype._renderVertical = function(pos) {
  var l = this.svg.line(10*pos, 0, 10*pos, 1000);
  l.attr({'stroke-dasharray':'1, 3', fill:'none', stroke: '#cccccc', 'stroke-linecap':'round'});
}

Grid.prototype.render = function() {

  _.times(100, this._renderHorizontal);
  _.times(100, this._renderVertical);

}


module.exports = Grid;
