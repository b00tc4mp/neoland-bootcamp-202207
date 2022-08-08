function concat(){   
    // TODO ...

    let result=''

    for ( let i = 0; i < arguments.length; i++) {
        // const arguments = arguments[i]
        // result = result + arguments[i]
        result+= arguments[i]
    }
    return result
}
// tests

console.log('TEST concat')

console.log(concat('Hola', 'Mundo'))
// HolaMundo

console.log(concat('Adios', 'Mundo', 'Cruel'))
// AdiosMundoCruel

console.log(concat('i', ' ', 'love', ' ', 'coding'))
// i love coding


// {   
//     // TODO ...

//     let result=""

//     for ( let i = 0; i < concat.arguments.length; i++) {
//         
//         result+= concat.arguments[i]
//     }
//     return result
// }