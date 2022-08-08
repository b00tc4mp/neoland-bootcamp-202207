function at(array, value) {
  var position = "";
  for (i = 0; i < array.length; i++) {
    if (i === value) {
      position += array[i];
    }
  }
  return position;
}
console.log(at(["cat", "dog", "elephant"], 2));
