describe('Cachay prototype Reverse', function () {
    it('reverse odd bunch of numbers', function () {
        const numbers = new Cachay (1, 2, 3, 4, 5, 6, 7)
        const result = numbers.reverse(numbers)

        expect(numbers).to.be.instanceof(Cachay)
        expect(result.length).to.equal (7)
        expect(result[0]).to.equal(7)
        expect(result[1]).to.equal(6)
        expect(result[2]).to.equal(5)
        expect(result[3]).to.equal(4)
        expect(result[4]).to.equal(3)
        expect(result[5]).to.equal(2)
        expect(result[6]).to.equal(1)
    

    })
    it('reverse odd bunch of chars', function () {
        const chars = new Cachay ('a', 'b', 'c', 'd', 'e')
        const result = chars.reverse(chars)

        expect(chars).to.be.instanceof(Cachay)
        expect(result.length).to.equal(5)
        expect(result[0]).to.equal('e')
        expect(result[1]).to.equal('d')
        expect(result[2]).to.equal('c')
        expect(result[3]).to.equal('b')
        expect(result[4]).to.equal('a')
    })
})