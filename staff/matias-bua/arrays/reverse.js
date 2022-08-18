function reverse(array) {
  const limit = Math.floor(array.length / 2);

  for (let i = 0; i < limit; i++) {
    const temp = array[i];
    const rearIndex = array.length - 1 - i;
    array[i] = array[rearIndex];
    array[rearIndex] = temp;
  }
  return array;
}
console.log(reverse([1, 2, 3, 4, 5, 6]));

// function reversed(array) {
//   let reverse = [];

//   for (let i = array.length - 1; i >= 0; i--) {
//     const array = array[i];
//     reverse.push(array);
//   }

//   return reverse;
// }

// reverse[array.length] = array[i];
