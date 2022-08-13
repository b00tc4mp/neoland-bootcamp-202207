function countWords(text) {
    let words=0,acum=0
    // acum vale 0 cuando detecta espacio, si detecta otra caracter acum =1 y se acumula en words++ 
    for(let i=0;i<text.length;i++){
       if(text[i]==' '){        
        acum=0
         }
         else if(acum==0)
         {
            // console.log(text[i])
            acum=1
            words++
         }   
    }    
    return words
}

// tests

console.log(countWords(' adiós      mundo cruel           '))
// 3

console.log(countWords('hello    world'))
// 2

console.log(countWords('0 1 2 3 4 5'))
// 5

