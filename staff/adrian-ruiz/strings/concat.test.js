describe('TESTING concat Strings', function(){
    test('Concat strings', function(){

        check(concat('Hola', 'Mundo'),'HolaMundo')
        check(concat('Adios', 'Mundo', 'Cruel'),'AdiosMundoCruel')
        check(concat('i', ' ', 'love', ' ', 'coding'),'i love coding')
    })
})

