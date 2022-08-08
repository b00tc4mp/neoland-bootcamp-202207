/*function reverse(array) {
  for (i = 0; i < Math.floor(array.length / 2); i++) {
    let temp = array[i];
    array[array.length - 1 - i] = temp;
  }
  return array;
}

console.log(reverse([1, 2, 3, 4]));*/

function reverse(array) {
  for (let i = 0; i < Math.floor(array.length + 1 / 2); i++) {
    let temp = array[array.length - 1 - i];
    array[i] = temp;
  }
  return array;
}

console.log(reverse([1, 2, 3, 4]));
