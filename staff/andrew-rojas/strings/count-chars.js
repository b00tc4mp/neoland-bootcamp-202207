function countChars(text) {
    // TODO ...

    var result =""
    
    for (var i = 0; i < countChars.arguments.length; i++) {
        // result = result + text.length
        result+= text.length
    }
    return result

}

// tests

console.log(countChars('hola mundo',))
// 10

console.log(countChars('hello world'))
// 11

console.log(countChars('1 2 3 4 5'))
// 9