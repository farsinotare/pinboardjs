
function calcPins(spacingX, spacingY, rawPins) {
  i = 1;
  var coords = rawPins.map(function(pin) {
    i++;
    return { y: (i % 2 == 0) ? i * spacingY : ( i - 1) * spacingY, x: (i % 2 == 0) ? spacingX : 2 * spacingX }
  })
  return coords;
}
module.exports = calcPins;
