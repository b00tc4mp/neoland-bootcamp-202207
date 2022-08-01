describe('TESTIN Cachay join', () =>{
    it('One Cachay with space separator', () =>{
        const testingCachay = new Cachay('Fire','Air','Water')
        result = testingCachay.join(' ')
        
        expect(testingCachay).to.be.instanceof(Cachay)

        expect(typeof result).to.equal('string')
        expect(result).to.equal('Fire Air Water')
    })

    it('One Cachay with NO SPACE SEPARATOR', () => {
        const testingCachay = new Cachay('Fire','Air','Water')
        result = testingCachay.join('')

        expect(testingCachay).to.be.instanceof(Cachay)

        expect(typeof result).to.equal('string')
        expect(result).to.equal('FireAirWater')
    })

    it('One Cachay with - separator',() => {
        const testingCachay = new Cachay('Fire','Air','Water')
        result = testingCachay.join('-')

        expect(testingCachay).to.be.instanceof(Cachay)

        expect(typeof result).to.equal('string')
        expect(result).to.equal('Fire-Air-Water')
    })

    it('One Cachay with UNDEFINED separator (Default -> , )', () => {
        const testingCachay = new Cachay('Fire','Air','Water')
        result = testingCachay.join()

        expect(testingCachay).to.be.instanceof(Cachay)

        expect(typeof result).to.equal('string')
        expect(result).to.equal('Fire,Air,Water')
    })
})