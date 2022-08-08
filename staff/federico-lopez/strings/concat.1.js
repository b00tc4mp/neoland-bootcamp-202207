function concat() {
    let result = ''

    for (let i = 0; i < arguments.length; i++) {
        //const argument = arguments[i]
        //result += argument

        //result = result + arguments[i]
        result += arguments[i]
    }

    return result
}

// tests

describe('concat', function () {
    check(concat('Hola', 'Mundo'), 'HolaMundo')

    check(concat('Adios', 'Mundo', 'Cruel'), 'AdiosMundoCruel')

    check(concat('i', ' ', 'love', ' ', 'coding'), 'i love coding')
})