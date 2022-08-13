function numerify(text) {
    let result = ''

    for (let i = 0; i < text.length; i++) {
        const character = text[i]
        const lowerCaseCharacter = character.toLowerCase()

        if (lowerCaseCharacter === 'e')
            result += '3'
        else if (lowerCaseCharacter === 'o')
            result += '0'
        else if (lowerCaseCharacter === 'i')
            result += '1'
        else if (lowerCaseCharacter === 'a')
            result += '4'
        else
            result += character
    }

    return result
}

// tests

console.log('TEST numerify')

console.log(numerify('hello world'))
// h3ll0 w0rld

console.log(numerify('one two three four five'))
// 0n3 tw0 thr33 f0ur f1v3

console.log(numerify('murcielago'))
// murc13l4g0

console.log(numerify('123'))
// 123

console.log(numerify('HELLO WORLD'))
// H3LL0 W0RLD

console.log(numerify('MURCIELAGO'))
// MURC13l4G0

console.log(numerify('mUrCIeLagO'))
// mUrC13L4g0