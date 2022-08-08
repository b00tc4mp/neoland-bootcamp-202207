function countWords(text) {
    var counter = 0;
for ( var i = 0; i < countWords.length ; i++ ){
    if (text[i] === " ")
     {
    counter = +1 ;}
    
     }
     return counter
    }



// tests

console.log(countWords('adiós mundo cruel'))
// 3

console.log(countWords('hello world'))
// 2

console.log(countWords('1 2 3 4 5'))
// 5