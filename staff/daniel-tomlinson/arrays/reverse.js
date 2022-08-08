// const array1 = [1, 2, 3, 4, 5, 6];
// console.log("array1:", array1);
// // expected output: "array1:" Array ["one", "two", "three"]

// const reversed = array1.reverse();
// console.log("reversed:", reversed);
// // expected output: "reversed:" Array ["three", "two", "one"]

// // Careful: reverse is destructive -- it changes the original array.
// console.log("array1:", array1);
// /*  */ // expected output: "array1:" Array ["three", "two", "one"]

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

const numbersArray = [1, 2, 3, 4, 5, 6];

// console.log(reverse(numbersArray));
