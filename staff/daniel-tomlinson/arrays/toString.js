array1 = [1, 2, 3, 4, 5];
array2 = ["ben", "phil", "sam"];

function toString(array) {
  let string1 = array[0];

  for (let i = 0; i < array.length - 1; i++) {
    string1 += ", " + array[i + 1];
  }

  return string1;
}

console.log(toString(array1));
console.log(toString(array2));
