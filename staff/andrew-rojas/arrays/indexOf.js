function indexOf(array, value) {
  for (var i = 0; i < array.length; i++) {
      if (array[i] === value) {
          return i;
      }
  }
}

console.log(indexOf(['dog', 'cat', 'elephant', 'monkey'], 'monkey'))
//  3

console.log(indexOf(['hello', 'world', 'bye', 'mars'], 'hello'))
//  0