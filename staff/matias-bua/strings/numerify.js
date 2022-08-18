function numerify(text) {
  let result = "";

  for (var j = 0; j < text.length; j++) {
    const character = text[j];

    if (character === "e") result += "3";
    else if (character === "o") result += "0";
    else if (character === "i") result += "1";
    else if (character === "a") result += "4";
    else result += character;
  }
  return result;
}

// console.log(numerify("Hello World"));
// // H3ll0 W0rld

// console.log(numerify("one two three four five "));
// // 0n3 tw0 thr33

// console.log(numerify("Murcielago"));
// // Murc13g4l0

// console.log(numerify("123"));
// //123
