function push(array, ...element) {
  // TODO
  for (let i = 0; i < element.length; i++) {
    const element = element[i];

    array[array.length] = element;
  }
  return array.length;
}

// var numbers = [0, 1, 2, 3];

// console.log(push(numbers, 7));
// // expected output: 5

// console.log(numbers);
// // expected output: [0, 1, 2, 3, 7]

// var animals = ["cat", "dog", "elephant"];

// console.log(push(animals, "monkey", "frog"));
// // expected output: 5

// console.log(animals);
// // expected output: ['cat', 'dog', 'elephant', 'monkey', 'frog']
