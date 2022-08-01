// Cachays

Cachay.prototype.forEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    const element = this[i];

    callback(element);
  }
};

// Arrays

function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    callback(element);
  }
}

/* Person.prototype.fullName = function (callback) {
  const fullname = this.name + " " + this.surname;

  callback(fullname);
}; */
