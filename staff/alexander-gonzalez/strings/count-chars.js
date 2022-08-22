function countChars(text) {
  var count = 0
  for (var i = 0; i < text.length; i++) {
    if (text[i] !== ' ') {
        count++
    }
  }
  return count 
}

// tests

console.log(countChars("hola mundo"));
// 9

console.log(countChars("hello world"));
// 10

console.log(countChars("1 2 3 4 5"));
// 5
