describe('Cachay.prototype.includes', function () {
    it('includes in array of Numbers', function () {
        const numbers = new Cachay(12, 25, 34);
        const searchElement = 25;
        const result = numbers.includes(searchElement)


        expect(result).to.be.equal(true)
        
    })

    it('includes in array of Animals', function () {
        const animals = new Cachay ('cat', 'dog', 'bat')
        const searchElement = 'cat';
        const result = animals.includes(searchElement)
        
        expect(result).to.be.equal(true)
        
    })

    it('no-includes in array of Animals', function () {
        const animals = new Cachay ('cat', 'dog', 'bat')
        const searchElement = 'at';
        const result = animals.includes(searchElement)
        expect(result).to.be.equal(false)
    })
})