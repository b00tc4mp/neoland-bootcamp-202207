describe('find', function () {
    it('find the first number greater than 10', function () {
        const numbers = new Cachay(5, 12, 8, 130, 44);

        const found = numbers.find(function (element) {
            return element > 10
        });

        expect(found).to.be.equal(12)
        expect(found).to.be.equal(numbers[1])
    })
    
    it('find an user that has 1234 id', function() {
        const users = new Cachay(
            { name: 'carlos', id: 1234 },
            { name: 'pepito', id: 1978 }
        )
    
        const userFound = users.find(function (user) {
            return user.id === 1234
        })
        
        expect(userFound).to.be.instanceof(Object, true)
        expect(userFound).to.be.equal(users[0])
        expect(userFound.name).to.be.equal('carlos')
    })

    it('on unexisting user with id 1999', function() {
        const users = new Cachay(
            { name: 'carlos', id: 1234 },
            { name: 'pepito', id: 1978 }
        )
    
        const userFound = users.find(function (user) {
            return user.id === 1999
        })
        
        expect(userFound).to.be.undefined
    })
})