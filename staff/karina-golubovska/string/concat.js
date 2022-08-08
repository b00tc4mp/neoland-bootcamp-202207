function concat(text, text2) {
 let result =''
 for (let i=0 ; i < arguments.length ; i++){
    const argument = arguments[i]
    result += argument 
 }
 return result 
 }









    /*if(text , text2)
    return (text + text2)
    var text = 0
    for ( var i = 0 ; i = text.lenght ; i++)
    if (text[i], ' ')
    {
    return (text[i] +' '+ text[i]+' '+ text[i])
    }
    
}*/

// tests

console.log(concat('Hola', 'Mundo'))
// HolaMundo

console.log(concat('Adios', 'Mundo', 'Cruel'))
// AdiosMundoCruel

console.log(concat('i', ' ', 'love', ' ', 'coding'))
// i love coding