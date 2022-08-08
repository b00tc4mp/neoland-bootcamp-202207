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