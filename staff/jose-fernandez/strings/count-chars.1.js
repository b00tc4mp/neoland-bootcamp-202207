function countChars(text) {
    let espac = 0
    for (let i = 0; i < text.length; i++) {
        if (text[i] === " " || text[i] == ' ') {
            espac++
        }
    }


    return text.length - espac

}

// tests

console.log(countChars('hola mundo'))
// 9

console.log(countChars('hello world'))
// 10

console.log(countChars('1 2 3 4 5'))
// 5