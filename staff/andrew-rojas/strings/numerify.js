function numerify(text) {
    // TODO...

    let result=''

    for( let i = 0; i < text.length; i++) {
        const character = text[i]
        const lowerCaseCharacter = character.toLowerCase()

        if (lowerCaseCharacter === 'e')
            result += '3'
        else if (lowerCaseCharacter === 'o')
            result += '0'
        else if (lowerCaseCharacter ==='i')
            result += '1'
        else if (lowerCaseCharacter ==='a')
            result += '4'
        else
            result += character
    }

    return result
}

//tests


console.log(numerify('hello world'))
// H3llo0 w0rld

console.log(numerify('one two three'))
// 0n3 tw0 thr33

console.log(numerify('murcielago'))
// murc13l4g0

console.log(numerify('123'))
//123

console.log(numerify('HELLO WORLD'))
//H3LL0 W0RLD

console.log(numerify('MURCIELAGO'))
//123

// function () {}