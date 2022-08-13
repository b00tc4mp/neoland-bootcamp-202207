// modificar cambio "replace"
function replaceChar(text, search, replace) {
    let te = ''
    for (let i = 0; i < text.length; i++) {
        if (text[i] === search) {
            te = te + replace
        } else {
            te = te + text[i]  
        }
    }
    return te
}


