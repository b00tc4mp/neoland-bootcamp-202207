
function countChars(text) {
    var charaters = 0
    for (var i = 0; i < text.length; i++){
        if (text[i]=== " ")
            charaters++
    }
    return text.length - charaters 
}


//console.log(countChars('hola mundo'))
// // 9

//console.log(countChars('hello world'))
// // 10

//console.log(countChars('1 2 3 4 5'))
// // 5