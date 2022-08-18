// modificar cambio "replace"
function replaceChar(text, search, replace) {
  let te = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] === search) {
      te = te + replace;
    } else {
      te = te + text[i];
    }
  }
  return te;
}

// tests

console.log(replaceChar(" hola mundo", "o", "U"));
// hUla mundU

console.log(replaceChar("0123456_89", "_", "7"));
// 0123456789

console.log(replaceChar("hell- w-rld", "-", "o"));
// hello world
