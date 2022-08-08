// Checks if an item is in the array and returns true or false

function includes(array, element) {
  result = "";
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) result = true;
  }
  if (result === true) return true;
  else return false;
}

console.log(includes([1, 2, 3, 4], 2));
