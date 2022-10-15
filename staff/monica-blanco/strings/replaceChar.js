function replaceChar(text, search, replace) {
    var resultado = ''
    for ( var i = 0; i < text.length; i++){
        if (text[i]== search){
            resultado = resultado + replace
        }else{ 
            resultado = resultado + text [i]
        }
    }
    return resultado
 } 


// tests

console.log(replaceChar('hola mundo', 'o', 'U'))
// hUla mundU

console.log(replaceChar('0123456_89', '_', '7'))
// 0123456789

console.log(replaceChar('hell- w-rld', '-', 'o'))
// hello world
// tests
