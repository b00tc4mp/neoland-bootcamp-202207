function concat(text, text1) {
    fila = text + text1
    return fila
}


console.log(concat('Hola', 'Mundo'))
// HolaMundo

//primera version
// function concat1() {
//     var result = ''

//     for (var i = 0; i < arguments.length; i++) {
//         result = result + arguments[i]
//     }

//     return result
// }