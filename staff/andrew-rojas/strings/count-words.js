function countWords(text) {
  // TODO ...
  
  let result = 0;

  for (let i = 0; i < text.length; i++) {
    if (text[i] === " " &&
      // text[i + 1] !== " " &&
      //i !== 0 &&
      i !== text.length -1) {

      // !==  <-- distinto a...
      // result= result + 1
      // result += 1
      result++;
    }
  }

  return result +1

}

// tests

console.log(countWords("adiós mundo cruel"));
// 3

console.log(countWords("hello world "));
// 2

console.log(countWords("1 2 3 4 5"));
// 5


// {
//   var result = text.split(" ");

//   return result.filter((word) => word !== " ").length;
// }
