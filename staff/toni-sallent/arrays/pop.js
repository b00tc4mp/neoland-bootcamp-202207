//let array = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];

function pop(array) {
  const last = array[array.length - 1];

  array.length--;

  return last;
}
//console.log(pop(array));
//console.log(array);

/*function pop(array) {
  // if (array.length > 0) {
  if (array.length) {
    const last = array[array.length - 1];

    //array.length = array.length - 1
    // array.length -= 1
    array.length--;

    return last;
  }
}

console.log(pop(array));
console.log(array);*/
