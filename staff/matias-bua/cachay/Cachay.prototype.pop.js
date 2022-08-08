Cachay.prototype.pop = function (values) {
  const elementToRemove = this[this.length - 1];

  // array.length = array.length - 1
  // array.length -= 1
  if (this.length > 0) {
    this.length--;
  }
  return elementToRemove;
};
