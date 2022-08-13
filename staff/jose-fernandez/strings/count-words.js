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

