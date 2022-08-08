function countWords(text){
    //TODO ...

    let espacios=' '
    let result= 0;

    for(let i = 0; i < TextDecoderStream.length; i++) {

        if (text[i] === ' ') {

                // result= result + 1
                // result += 1
                result ++;
        }
        return result
    }


}

//tests





// tests

console.log(countWords('adiós mundo cruel'))
// 3

console.log(countWords('hello world'))
// 2

console.log(countWords('1 2 3 4 5'))
// 5