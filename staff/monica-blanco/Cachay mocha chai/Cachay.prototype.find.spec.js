describe('Cachay.prototype.find', function () {
    it('find the first number greater than 10', function () {
        const array = new Cachay (5, 12, 8, 130, 44)

        const found = array.find(function (element) {
            return element > 10
        });

        expect(found).to.equal (12)
        expect(found).to.equal (array[1])
    })
    
    it('find an user that has 1234 id', function() {
        const users = new Cachay (
            { name: 'carlos', id: 1234 },
            { name: 'pepito', id: 1978 }
        )
    
        const userFound = users.find(function (user) {
            return user.id === 1234
        })
        
        expect(userFound instanceof Object, true)
        expect(userFound, users[0])
        expect(userFound.name, 'carlos')
    })

    it('on unexisting user with id 1999', function() {
        const users = new Cachay (
            { name: 'carlos', id: 1234 },
            { name: 'pepito', id: 1978 }
        )
    
        const userFound = users.find(function (user) {
            return user.id === 1999
        })
        
        expect(userFound, undefined)
    })
})