Cachay.prototype.pop = function (...values) {
  let result = new Cachay();
  for (let i = 0; i < values.length; i++) {
    let lastPosition = this.values - 1;

    let lastElement = this.values[lastPosition];
    values.splice(-1);
    result = lastElement(values[i]);
  }
  return lastElement;
};
