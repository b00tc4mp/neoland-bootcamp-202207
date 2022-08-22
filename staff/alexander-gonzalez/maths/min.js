function min(a, b) {
  let small = arguments[0];

  for (var i = 0; i < arguments.length; i++) {
    if (small > arguments[i]) {
      small = arguments[i];
    }
  }

  return small;
}

// tests

console.log(min(4, 1));
// 1

console.log(min(123, 456));
// 123

console.log(min(1, 2, 3, 0, 4, 5)); // TODO learn about "js arguments"
// 0
