describe('at', function(){
    test('exercise 1', function(){
        const array= ['cat','dog','elephant']
        const position= 2
        const result = array.at(array, position)

        check(result, 'elephant');
    })
    test('excerise 2', function(){
        const array=['Adios',1,'Mundo']
        const position = 0
        const result = array.at(array, position)

        check(result, 'Adios')
    })



})