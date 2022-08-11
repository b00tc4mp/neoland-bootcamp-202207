function replaceChar(text, search, replace) {
    // TODO ...

    let result = "";
    for (let i = 0; i < text.length; i++) {
        if (text[i] === search) {
            // result= result + replace
            result += replace;
        } else {
            //result= result + text[i]
            result += text[i];
        }
    }
    return result;
}

// tests

console.log(replaceChar('hola mundo', 'o', 'U'))
// hUla mundU

console.log(replaceChar('0123456_89', '_', '7'))
// 0123456789

console.log(replaceChar('hell- w-rld', '-', 'o'))
//hello world