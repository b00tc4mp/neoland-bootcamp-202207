function countChars(text) {
    var counter = 0
for ( var i = 0; i < text.length ; i++ ){
    if (text[i] !== ' ')
    counter++;
}
   
    /*if (text == " ")
    retutn (text)
     {  
     counter++;
      }*/
      
return counter
}


// tests text[]

console.log(countChars('hola mundo'))
// 9

console.log(countChars('hello world'))
// 10

console.log(countChars('1 2 3 4 5'))
// 9