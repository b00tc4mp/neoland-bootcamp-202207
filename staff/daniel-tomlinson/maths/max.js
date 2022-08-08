function max() {
  let maximum = arguments[0];

  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > maximum) maximum = arguments[i];
  }

  return maximum;

  // maximum[0] = arguments[0];
  // {
  //   for (let i = 0; i < arguments.length; i++)
  //     if (arguments[i] > maximum[0]) maximum[0] = arguments[i];
  // }
  // return maximum[0];
}
