describe('Cachay.prototype.every', function () {
    it('arrayOfNumbers', function () {
        var numbers = new Cachay(45, 65, 18, 76, 98, 34);
        const element = 45
        const result = numbers.every(element)

        expect(result).to.equal(true)
    })

    it('arrayOfAnimals', function () {
        var animals = new Cachay('rat', 'dog', 'cat', 'elephant', 'jaw');
        const element = 'dog'
        const result = animals.every(element)

        expect(result).to.be.equal(true)
    })

    it('arrayOfColors', function () {
        const colors = new Cachay('red', 'pink', 'blue', 'orange', 'yellow');
        const element = 'white'
        const result = colors.every(element)

        expect(result).to.be.equal(false)
    })
})


