describe('map', function() {
    it('multiply numbers', function() {
        const nums = new Cachay(1, 2, 3, 4, 5)

        const result = nums.map((num) => num * 2)

        expect(nums).to.be.instanceof(Cachay)
        expect(result.length).to.equal(nums.length)
        expect(result[0]).to.equal(2)
        expect(result[1]).to.equal(4)
        expect(result[2]).to.equal(6)
        expect(result[3]).to.equal(8)
        expect(result[4]).to.equal(10)
    })

    it('iterate strings', function() {
        const strings = new Cachay('hola', 'mundo', 'yupi')

        const result = strings.map((string) => string.toUpperCase())

        expect(strings).to.be.instanceof(Cachay)
        expect(result.length).to.equal(strings.length)
        expect(result[0]).to.equal('HOLA')
        expect(result[1]).to.equal('MUNDO')
        expect(result[2]).to.equal('YUPI')
    })
})