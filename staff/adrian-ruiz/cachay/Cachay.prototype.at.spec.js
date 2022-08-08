describe('TESTING Cachay At', function(){
    it('Return element from mid position',function(){
        const testingCachay = new Cachay('cat','dog','elephant')
        const result = testingCachay.at(1)

        expect(result).to.be.equal(testingCachay[1])
        expect(result).to.equal('dog')
    })

    it('Return element from first position', function(){
        const testingCachay = new Cachay('Adiós','Mundo','Cruel')
        const result = testingCachay.at(0)

        expect(result).to.be.equal(testingCachay[0])
        expect(result).to.equal('Adiós')
    })

    it('Return undefined for an unexistent index', () => {
        const testingCachay = new Cachay('cat','dog','elephant')
        const result = testingCachay.at(3)

        
        expect(result).to.equal(undefined)
    })

    it('Return last index with -1', () => {
        const testingCachay = new Cachay('cat','dog','elephant')
        const result = testingCachay.at(-1)

        expect(result).to.be.equal(testingCachay[2])
        expect(result).to.equal('elephant')
    })
})
