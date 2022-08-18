function countWords(text) {
  let countWords = 0;
  if (text[0] !== " ") countWords = 1;

  for (var i = 0; i < text.length; i++) {
    if (text[i] === " " && text[i + 1] !== " " && text[i + 1] !== undefined)
      countWords++;
  }
  return countWords;
}
