function power(Val, pow) {
  var r = 1;
  for (var j = 0; j < pow; j++) {
    r *= Val;
  }
  return r;
}
