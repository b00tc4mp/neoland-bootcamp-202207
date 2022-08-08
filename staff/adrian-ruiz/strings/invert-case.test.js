describe('TESTING invertCase', function(){
    test('Invert case to Lower or Upper Case from a string', function(){
        check(invertCase('Hello World'),'hELLO wORLD')
        check(invertCase('a B c D e F'),'A b C d E f')
        check(invertCase('i lOVe COdInG'),'I LovE coDiNg')
    })
})

//Futuras implementaciones
//Que devuelva también los simbolos: / ! % .....