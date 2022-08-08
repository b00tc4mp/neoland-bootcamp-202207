function min() {
  let minimum = arguments[0];
  for (let i = 0; i < arguments.length; i++)
    if (arguments[i] < minimum) minimum = arguments[i];
  return minimum;
}
