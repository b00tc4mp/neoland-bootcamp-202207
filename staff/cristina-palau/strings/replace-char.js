function replaceChar(text, search, replace) {
    var result = ""
    for (var i = 0; i < text.length; i++) {
        if (text[i] === search)
            result = result + replace
        else
            result = result + text[i]
    }
    
    return result
}

