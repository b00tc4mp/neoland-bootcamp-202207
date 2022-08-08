describe('find', function () {
    test('find the first number greater than 10', function () {
        const array = [5, 12, 8, 130, 44];

        const found = find(array, function (element) {
            return element > 10
        });

        check(found, 12)
        check(found, array[1])
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
})