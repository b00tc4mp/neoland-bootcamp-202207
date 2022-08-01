// Cachay

Cachay.prototype.concat = function (...values) {
  let result = {};
  result.length = 0;

  for (let i = 0; i < this.length; i++) {
    result[i] = this[i];
    result.length++;
  }

  for (let i = 0; i < values.length; i++)
    for (let j = 0; j < values[i].length; j++) {
      result[result.length] = values[i][j];
      result.length++;
      // console.log(arguments[i][j]);
      // console.log(newArray);
    }
  return result;
};

// Array

/* function concat() {
  let newArray = [];
  let index = 0;
  for (let i = 0; i < arguments.length; i++)
    for (let j = 0; j < arguments[i].length; j++) {
      newArray[index] = arguments[i][j];
      index++;
      // console.log(arguments[i][j]);
      // console.log(newArray);
    }
  return newArray;
} */
