describe('TESTING find in Arrays', function(){
    test('Return element bigger than 10', function(){
        
        const array = [5, 12, 8, 130, 44]
        const result = find(array, function(element){
            return element > 10
        })

        check(result,12)
    })

    test('Find object in array with specific property', function(){

        const inventario = [
            {nombre: 'manzanas', cantidad: 2},
            {nombre: 'bananas', cantidad: 0},
            {nombre: 'cerezas', cantidad: 5}
        ]

        function esCereza(fruta) {
            return fruta.nombre === 'cerezas';
        }
        const result = find(inventario, esCereza)
        check(result, inventario[2])
    })

    test('Element does not exists -> Should return UNDEFINED', function(){
        const array = [5, 12, 8, 130, 44]

        const result = find(array, function(element){
            return element > 150
        })
        check(result,undefined)
    })

    test('Find in array with empty indexes', function(){
        const array = [5,,,130, 44]
        const result = find(array, function(element){
            return element > 10
        })

        check(result, 130)
    })

    test('Find in array with null and undefined elements',function(){
        const array = [5,null,undefined,130, 44]

        const result = find(array, function(element){
            return element > 10
        })

        check(result, 130)
    })

    test('Find in array with element deleted by callback function',function(){
        
        const array = [5,null,undefined,130, 44]
        const result = find(array, function(element){
            delete array[3]
            return element > 10
        })

        check(result[3],undefined)
        check(result,44)

    })

    test('find an user that has 1234 id', function() {
        const users = [
            { name: 'carlos', id: 1234 },
            { name: 'pepito', id: 1978 }
        ]
    
        const userFound = find(users, function (user) {
            return user.id === 1234
        })
        
        check(userFound instanceof Object, true)
        check(userFound, users[0])
        check(userFound.name, 'carlos')
    })

    test('on unexisting user with id 1999', function() {
        const users = [
            { name: 'carlos', id: 1234 },
            { name: 'pepito', id: 1978 }
        ]
    
        const userFound = find(users, function (user) {
            return user.id === 1999
        })
        
        check(userFound, undefined)
    })

    test('First argument not an array', function(){

        const array = [5, 12, 8, 130, 44]

        const result = find('1234', function(element){
            return element > 150
        })
        check(result,'1234 is not an Array')
    })

    test('Second argument not an array',function(){
        const array = [5, 12, 8, 130, 44]

        const result = find(array,'1234')
        check(result,'1234 is not a Function')
    })
})