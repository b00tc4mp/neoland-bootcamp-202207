// const array1 = [1, 30, 39, 29, 10, 13, 40];
// const array2 = [1, 30, 39, 29, 10, 13];
// const lessThan = 40;

// console.log(array1.every(isBelowThreshold));
// // expected output: true

function every(array, rule) {
  let negativeResult = "";
  for (let i = 0; i < array.length; i++)
    if (array[i] >= rule) negativeResult = false;

  if (negativeResult === false) return false;
  else return true;
}

// console.log(every(array1));
// console.log(every(array2));
