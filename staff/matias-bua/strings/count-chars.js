function countChars(text) {
  var empty = 0;
  for (var i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      empty++;
      // empty = text[i] + 1;
    }
  }

  return text.length - empty;
}
