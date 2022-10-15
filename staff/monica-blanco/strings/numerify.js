function numerify(text){
    let result = ''

    for (let i = 0; i < text.length; i++){
        const charater = text[i]
        const lowerCaseCharacter = charater.toLowerCase ()
        
        if (lowerCaseCharacter === 'e')
            result = result + '3'
        else if (lowerCaseCharacter === 'o')
            result = result + '0'
        else if (lowerCaseCharacter === 'i')
            result = result + '1'
        else if (lowerCaseCharacter === 'a')
            result = result + '4'
        else if (lowerCaseCharacter === 'h')
            result = result + 'H'
        else if (lowerCaseCharacter === 'w')
            result = result + 'W'
        else
            result = result + charater
    }
    return result
}

// console.log ('TEST numerify')
// console.log (numerify('hello world'))
// //H3llo W0rls
// console.log (numerify('one two three four five'))
// // 0n3 tw0 thr33 f0ur f1v3'
// console.log(numerify('murcielago'))
// //murc13l4g0
// console.log(numerify('123'))
// //123
// console.log (numerify('HELLO WORLD'))
// // H3LL0 W0RLD