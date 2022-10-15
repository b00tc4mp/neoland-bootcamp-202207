describe('Concat', function() {
    test ('Concat strings', function(){
        check(concat('Hola','Mundo'),'HolaMundo')
    })
    test ('Concat strings', function(){
        check(concat('Adios', 'Mundo', 'Cruel'), 'AdiosMundoCruel')
    })
    test ('Concat strings', function(){
        check(concat('i', ' ', 'love', ' ', 'coding'), 'i love coding')
    })
})