function replaceChar(text, search, replace) {
  // TODO ...
  let string = text[0];
  for (let i = 1; i < text.length; i++)
    if (text[i] === search) string += replace;
    else string += text[i];
  return string;
}
