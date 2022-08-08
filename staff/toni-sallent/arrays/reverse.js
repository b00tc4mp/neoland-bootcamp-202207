function reverse(array) {
  const newArray = [];

  for (i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}
console.log(reverse(["one", "two", "three"]));
