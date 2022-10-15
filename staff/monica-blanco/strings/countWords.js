function countWords(text) {

    var count = 0;
    for(var i = 0; i < text.length; i++){
        if(text[i] === " "){
            count += 1; 
        }
    }
    return count +1 
}

// tests
//OJO REVISAR QUE ESTO ESTA MALO 
//console.log(countWords('adiós mundo cruel'))
// 3

//console.log(countWords('hello world'))
// 2

//console.log(countWords('1 2 3 4 5'))
// 5