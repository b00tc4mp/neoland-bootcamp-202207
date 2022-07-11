function concat(text, text2) {
    var result=""
    for (i = 0; i < arguments.length; i++){
        // const argument = arguments[i]
        // result += argument

        result += arguments[i]
    }
    return result
}
// tests

console.log(concat('Hola', 'Mundo'))
// HolaMundo

console.log(concat('Adios', 'Mundo', 'Cruel'))
// AdiosMundoCruel

console.log(concat('i', ' ', 'love', ' ', 'coding'))
// i love coding