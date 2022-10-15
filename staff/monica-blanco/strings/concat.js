function concat() {
    var result = ''

    for (var i = 0; i < arguments.length; i++) {
        //const argument = arguments[i]
        
        //result= result+ argument
        result = result + arguments[i]
    }

    return result
}

// console.log(concat1('Hola','Mundo'))
// // HolaMundo
// console.log(concat1('Adios', 'Mundo', 'Cruel'))
// // AdiosMundoCruel

// console.log(concat1('i', ' ', 'love', ' ', 'coding'))
// // i love coding