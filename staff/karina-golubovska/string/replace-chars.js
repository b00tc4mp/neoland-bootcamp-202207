function replaceChar(text, search, replace) {
    let result = ''

    for (let i = 0; i < text.length; i++) {
        const character = text[i]

        if (character === search)
            result += replace
        else result += character
            
    }

    return result
}

// tests

console.log(replaceChar('hola mundo', 'o', 'U'))
// hUla mundU

console.log(replaceChar('0123456_89', '_', '7'))
// 0123456789

console.log(replaceChar('hell- w-rld', '-', 'o'))
// hello world