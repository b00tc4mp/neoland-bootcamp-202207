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

describe('numerify', function () {
    check(numerify('hello world'), 'h3ll0 w0rld')

    check(numerify('one two three four five'), '0n3 tw0 thr33 f0ur f1v3')

    check(numerify('murcielago'), 'murc13l4g0')

    check(numerify('123'), '123')

    check(numerify('HELLO WORLD'), 'H3LL0 W0RLD')

    check(numerify('MURCIELAGO'), 'MURC13L4G0')

    check(numerify('mUrCIeLagO'), 'mUrC13L4g0')
})