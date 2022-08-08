function concat(text, text2) {
    var resultado = ""

    for(let i = 0; i < arguments.length; i++){

        // Con concat
        //resultado = resultado.concat(arguments[i])
        
        resultado += arguments[i]
    }
    return resultado
}