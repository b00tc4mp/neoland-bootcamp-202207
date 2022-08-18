function invertCase(text) {
  let result = "";

  const alphabetLowerCase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "ñ",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const alphabetUpperCase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "Ñ",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < alphabetLowerCase.length; j++) {
      if (text[i] === alphabetLowerCase[j]) {
        result += alphabetUpperCase[j];
        break;
      } else if (text[i] === alphabetUpperCase[j]) {
        result += alphabetLowerCase[j];
        break;
      } else if (j === alphabetLowerCase.length - 1) {
        result += text[i];
      }
    }
  }
  return result;
}
