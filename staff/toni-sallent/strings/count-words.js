function countWords(text){
    var counter = 0
        if(text.length > 0){
            
            for(i = 0; i < text.length; i ++){
                if(text[i] === ' '){
                    counter ++
                }
            }
        return counter += 1
        }

return counter
}
console.log(countWords('Hello beautiful world'))