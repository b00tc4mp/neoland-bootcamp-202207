function numerify(text) {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    const Character = text[i];
    const lowerCaseCharacter = Character.toLowerCase();
    if (lowerCaseCharacter === "e") result += "3";
    else if (lowerCaseCharacter === "i") result += "1";
    else if (lowerCaseCharacter === "a") result += "4";
    else if (lowerCaseCharacter === "o") result += "0";
    else result += Character;

    }
    return result;

}
//test

console.log("TEST numerify");

console.log(numerify("hello world"));
//h3ll0 w0rld

console.log(numerify("one tho three"));
//0n3 tw0 thr33

console.log(numerify("murcielago"));
//murc13l4g0
console.log(numerify("123"));
//123
