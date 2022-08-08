describe('TESTING findIndex in arrays', function(){
    test('Find index in array of numbers', function(){

        const array= [5, 12, 8, 130, 44]
        const isLargeNumber = (element) => element > 13
        const result = findIndex(array, isLargeNumber)

        
        check(result,3)

    })

    test('Find index that does not match in array of numbers (return -1)', function(){

        const array= [5, 12, 8, 130, 44]
        const isLargeNumber = (element) => element > 150
        const result = findIndex(array, isLargeNumber)
        check(result,-1)
    })

    test('Find index of object that matches', function(){
        
        const users = [
            {name: 'Adrian', id: 1234},
            {name: 'Pepe', id: 5678},
            {name: 'Jose', id: 4321}
        ]
        const checkid = (user) => user.id === 5678
        const result = findIndex(users, checkid)
        check(result,1)
        
    })

    test('Find index of object that does not matches', function(){
        const users = [
            {name: 'Adrian', id: 1234},
            {name: 'Pepe', id: 5678},
            {name: 'Jose', id: 4321}
        ]
        const checkid = (user) => user.id === 1111
        const result = findIndex(users, checkid)
        check(result,-1)
    })

    test('Arguments not enough', function(){
        const users = [
            {name: 'Adrian', id: 1234},
            {name: 'Pepe', id: 5678},
            {name: 'Jose', id: 4321}
        ]
        const result = findIndex(users)
        check(result,'Arguments are not enough(2required)')

    })

    test('Arguments exceeded', function(){
        const users = [
            {name: 'Adrian', id: 1234},
            {name: 'Pepe', id: 5678},
            {name: 'Jose', id: 4321}
        ]
        const result = findIndex(users,1234,'12345','13123')
        check( result, 'Arguments exceeded')
    })

    test('First argument not an array', function(){
        const users = [
            {name: 'Adrian', id: 1234},
            {name: 'Pepe', id: 5678},
            {name: 'Jose', id: 4321}
        ]
        const result = findIndex('1234','13123')
        check(result, 'First argument must be an ARRAY')
    })

    test('Second argument not a function', function(){
        const users = [
            {name: 'Adrian', id: 1234},
            {name: 'Pepe', id: 5678},
            {name: 'Jose', id: 4321}
        ]
        const result = findIndex(users,'13123')
        check(result, 'Second argument must be a Function')
    })
})