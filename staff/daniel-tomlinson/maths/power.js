// function power(val, pow) {
//   return Math.pow(val, pow);
// }

function powerFor(val, pow) {
  if (pow === 0) return 0;
  else {
    var result = 1;
    for (i = 0; i < pow; i++) {
      result *= val;
    }
    return result;
  }
}
