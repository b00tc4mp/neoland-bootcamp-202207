function max(a, b) {
  // TODO ...
  let result = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    const element = arguments[i];
    if (element > result) result = element;
  }
  return result;
}
