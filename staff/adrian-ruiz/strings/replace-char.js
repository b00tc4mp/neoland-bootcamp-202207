function replaceChar(text, search, replace) {
    //return text.replaceAll(search, replace)
    var newText = ""
    for(let i = 0; i < text.length; i++){
        if(text[i] === search)
            newText = newText + replace
        else{
            newText = newText + text[i]
        }
    }
    return newText
}