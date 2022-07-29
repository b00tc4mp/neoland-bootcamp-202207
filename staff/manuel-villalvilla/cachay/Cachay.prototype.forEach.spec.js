describe('forEach', function() {
    it('iterate numbers', function() {
        const nums = new Cachay(1, 2, 3, 4, 5)
        const result = []

        nums.forEach(function(num) {
            result[result.length] = num;
        })

        expect(nums).to.be.instanceof(Cachay)
        expect(result.length).to.equal(nums.length)
        expect(result[0]).to.equal(nums[0])
        expect(result[1]).to.equal(nums[1])
        expect(result[2]).to.equal(nums[2])
    })

    it('iterate strings', function() {
        const strings = new Cachay('hola', 'mundo', 'yupi')
        let result = ''

        const concatenate = function(string) { result += string }

        strings.forEach(concatenate)

        expect(strings).to.be.instanceof(Cachay)
        expect(result.length).to.equal(strings[0].length + strings[1].length + strings[2].length)
        expect(result).to.equal(strings[0] + strings[1] + strings[2])
    })
})