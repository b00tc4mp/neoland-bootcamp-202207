//integer value and returns the item at that index
describe('Cachay.prototype.at', () => {
    it('return index indicado de Cachay ', () => {
        const c = new Cachay (2,7,9,5)
        const pos = 2
        const result = c.at(pos)

        expect(c).to.be.instanceOf(Cachay)
        expect(c.length).to.equal(4)
        expect(result).to.equal(c[pos])
    })

    it('return one element the Cachay', () => {
        const nums = new Cachay(10, 20, 30)
        const pos = 2
        const result = nums.at(pos)
        
        expect(nums).to.be.instanceOf(Cachay)
        expect(nums.length).to.equal(3)
        expect(result).to.equal(nums[pos])
    
    })
    it('Cachay negative', () => {
        const negative = new Cachay(1,130,50)
        const pos = -2
        const result = negative.at(pos)
        
        expect(negative).to.be.instanceOf(Cachay)
        expect(negative.length).to.equal(3)
        expect(result).to.equal(negative[length+pos])

    })
    it('Cachay strings', () => {
        const string = new Cachay('gato','perro','paloma')
        const pos = 2
        const result = string.at(pos)
        
        expect(string).to.be.instanceOf(Cachay)
        expect(string.length).to.equal(3)
        expect(result).to.equal(string[pos])
    })
    it('Cachay strings', () => {
        const string = new Cachay('gato','perro','paloma')
        const pos = 2
        const result = string.at(pos)
        
        expect(string).to.be.instanceOf(Cachay)
        expect(string.length).to.equal(3)
        expect(result).to.equal(string[pos])
    })
})