function countWords(text) {
    let result = 0
    for (let i = 0; i < text.length; i++) {
        if (text[i] === " " &&
            text[i + 1] !== " " &&
            i !== text.length - 1 &&
            i !== 0)
            
            result += 1
    }
    return result + 1
}
// function countWords(text) {
//     var words = text.split (' ')
//     result = words.length

//     return result
// }

console.log(countWords('adiós mundo cruel'))
// 3

console.log(countWords('hello world'))
// 2

console.log(countWords('1 2 3 4 5'))
// 5