function countChars(text) {
  var counter = 0;

  for (var i = 0; i < text.length; i++) {
    if (text[i] !== " ") {
      counter += 1;
    }
  }
  return counter;
}

console.log(countChars("1 2 3 4 5"));
