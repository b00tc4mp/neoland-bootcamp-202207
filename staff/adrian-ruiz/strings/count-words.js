function countWords(text) {
    let wordCount

    if(text[0]=== " "){
        wordCount = 0;
    }else wordCount = 1;

    for(let i = 0; i < text.length; i++){
        
        if(text[i] === " " && text[i+1]!== " " && (i+1)!==text.length){
            wordCount += 1
        }
        
    }
    
    return wordCount
}