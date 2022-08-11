function lastIndexOf (element, start, array) {
  var l = arguments.length;
  if (l === 3) {
      for (var i = start; i >= 0; i--) {
          if (array[i] === element) {
              return i;
          }
      }
      return -1;
  } else if (l === 2) {
      for (var i = arguments[1].length - 1; i >= 0; i--) {
          if (arguments[1][i] === element) {
              return i;
          }
      }
      return -1;
  }
}



var fruits = ["Orange", "Apple", "Mango", "Apple", "Banana", "Apple"];


console.log(lastIndexOf('Apple', fruits));
// expected output 5

console.log(lastIndexOf('Apple', 4, fruits));
// expected output 3

console.log(lastIndexOf('Cherry', fruits));
// expected output -1
