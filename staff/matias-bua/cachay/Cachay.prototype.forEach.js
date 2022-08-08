Cachay.prototype.forEach = function (callback) {
  for (i = 0; i < this.length; i++) {
    const element = this[i];

    callback(element);
  }
};
