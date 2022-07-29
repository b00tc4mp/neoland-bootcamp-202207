describe('find', function() {
    it('numbers', function() {
        const nums = new Cachay(1, 12, 23, 34, 45)

        const result = nums.find((num) => num > 10)

        expect(nums).to.be.instanceof(Cachay)
        expect(result).to.equal(12)
    })

    it('iterate strings', function() {
        const strings = new Cachay('hola', 'mundo', 'yupi')

        const result = strings.find((string) => string.length > 4)

        expect(strings).to.be.instanceof(Cachay)
        expect(result).to.equal('mundo')
        
    })
})