function countChars(text) {
  let string = "";
  for (let i = 0; i < text.length; i++) if (text[i] !== " ") string += text[i];
  return string.length;
  // TODO ...
}
