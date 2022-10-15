describe('forEach sin callback', function() {
    it('iterates numbers', function() {
        const nums = new Cachay (10, 20, 30)
        const result = []

        nums.forEach = result

        expect(result).to.be.instanceof(Cachay)
        expect(result[0]).to.equal(nums[0])
        expect(result[1]).to.equal(nums[1])
        expect(result[2]).to.equal(nums[2])
    })
    it('iterates strings', function() {
        const strings = new Cachay ('hola', 'mundo', 'cruel', 'cruel')
        const result = []

        strings.forEach = result

        expect(result).to.be.instanceof(Cachay)
        expect(result[0]).to.equal(strings[0])
        expect(result[1]).to.equal(strings[1])
        expect(result[2]).to.equal(strings[2])
        expect(result[3]).to.equal(strings[3])
    })
})
