function min() {
  var minimum = arguments[0];

  for (i = 1; i < arguments.length; i++) {
    if (arguments[i] < minimum) {
      minimum = arguments[i];
    }
  }
  return minimum;
}

// TODO ...
// if (a < b )
//     return a

// else ( b < a )
//     return b
