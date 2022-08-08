function invertCase(text){
    debugger
    var stResult = ''
    for(i = 0; i < text.length; i++){
        
        if(text[i] === text[i].toUpperCase())
             stResult += text[i].toLowerCase()
        else
           stResult += text[i].toUpperCase()
    
        
    }
    return stResult
}

console.log(invertCase('HeLlO'))