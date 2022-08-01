// function push() {
//   // TODO
//   let array = arguments[0];
//   let elements = "";
//   let newArray = "";
//   for (let i = 0; i < arguments.length - 1; i++) {
//     elements = arguments[i + 1];
//     newArray = array.push(elements);
//     // console.log(newArray);
//   }
//   return newArray;
// }

function push() {
  // TODO
  let array = arguments[0];
  length = array.length;
  for (let i = 1; i < arguments.length; i++) {
    array[array.length] = arguments[i];
  }
  return array.length;
}

// var numbers = [0, 1, 2, 3];

// var animals = ["cat", "dog", "elephant"];

/* function push(array, element) {
  array[array.length] = element;

  return array.length;
} */
