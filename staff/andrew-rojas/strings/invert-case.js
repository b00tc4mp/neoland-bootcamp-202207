function invertCase(text) {
    // TODO ...
    let result= ''

    for (let i = 0; i < text.length; i++) {
        if (text[i] === text[i].toUpperCase())
        // result = result + text[i].toLowerCase
        result += text[i].toLowerCase()

        // result = result + text[i].toUppercase
        else
        result += text[i].toUpperCase()
    }
    
    return result
}

// tests

console.log(invertCase('Hello World'))
// hELLO wORLD

console.log(invertCase('a B c D e F'))
// A b C d E f

console.log('i lOVe COdInG')
// I LovE coDiNg