describe('concat', function (){
    test('hola mundo', function() {
        check(concat ('Hola', 'Mundo'), 'HolaMundo')
    })
    
    test('Adios Mundo Cruel', function() {
        check(concat ('Adios', 'Mundo', 'Cruel'), 'AdiosMundoCruel')
    })

    test('i love coding', function() {
        check(concat ('i', ' ', 'love', ' ', 'coding'), 'i love coding')
    })
})

// tests

console.log('TEST concat')

console.log(concat('Hola', 'Mundo'))
// HolaMundo

console.log(concat('Adios', 'Mundo', 'Cruel'))
// AdiosMundoCruel

console.log(concat('i', ' ', 'love', ' ', 'coding'))
// i love coding

