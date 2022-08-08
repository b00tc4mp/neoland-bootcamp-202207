function indexOf(array, value) {
  for (i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

//console.log(indOf(["dog", "cat", "elephant", "monkey", "monkey"], "monkey"));
// expected output: 3

//console.log(indOf(["hello", "world", "bye", "mars"], "hello"));
// expected output: 0

//console.log(indOf(["hello", "world", "bye", "mars"], "hola"));

//console.log(["dog", "cat", "elephant", "monkey", "monkey"].indexOf("monkey"));
