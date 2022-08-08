function numerify(text){
   let result = ''
   for(let i = 0; i < text.length; i++){
    const character = text[i]

    if( character === 'e' || character === 'E')
        result += '3';
    else if(character === 'o' || character === 'O')
        result += '0';
    else if(character === 'i' || character === 'I')
        result += '1';
    else if(character === 'a' || character === 'A')
        result += '4';
    else
        result += character;

    }
return result
}

//console.log('TEST numeryfy')

console.log(numerify('hello world'))
// h3ll0 w0rld

console.log(numerify('murcielago'))
// murc13l4g0

console.log(numerify('one two three four five'))

