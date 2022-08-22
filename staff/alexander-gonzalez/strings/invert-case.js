function invertCase(text) {
  /*let resultado = "";
  for (let i = 0; i < text.length; i++) {
    if (/[a-z]/.test(text[i])) {
      resultado += text[i].toUpperCase();
    } else {
      resultado += text[i].toLowerCase();
    }
  }

  return resultado
}*/

  let invertedText = " ";
  for (i = 0; i < text.length; i++) {
    let character = text[i];
    const charlsUpper = character === character.toUpperCase();
    if (charlsUpper) {
      character = character.toLowerCase();
    } else {
      character = character.toUpperCase();
    }
    invertedText = invertedText + character;
  }
  return invertedText;
}

/*  let result =' ';
   
    for(let i = 0; i < text.length; ++i){
        if(0 % 1 != 0){
            result += text[i].toUpperCase();
        }
        else {
            result += text[i].toLowerCase();

        }
    }

return result;


}*/

// tests

console.log(invertCase("Hello World"));
// hELLO wORLD

console.log(invertCase("a B c D e F"));
// A b C d E f

console.log("i lOVe COdInG");
// I LovE coDiNg
