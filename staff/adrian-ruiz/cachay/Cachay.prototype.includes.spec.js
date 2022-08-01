describe('TESTING Cachay includes', () => {
    it('Check if a Cachay includes a word WITHOUT Starting INDEX', () => {
        const testingCachay = new Cachay('Banana','Orange','Apple','Mango')
        const result = testingCachay.includes('Mango')

        expect(result).to.equal(true)
    })

    it('Check if a Cachay includes a word WITH starting INDEX', () => {
        const testingCachay = new Cachay('Banana','Orange','Apple','Mango')
        const result = testingCachay.includes('Banana', 2)

        expect(result).to.equal(false)
    })

    it('Check if a Cachay includes a word WITH NEGATIVE Starting Index', () => {
        const testingCachay = new Cachay('Banana','Orange','Apple','Mango')
        const result = testingCachay.includes('Mango', -2)

        expect(result).to.equal(true)
    })

    it('FROM INDEX bigger or equal to Cachay length (DOES NOT SEARCH)', ()=>{
        const testingCachay = new Cachay('Banana','Orange','Apple','Mango')
        const result = testingCachay.includes('Mango', 4)

        expect(result).to.equal(false)
    })

    it('Calculated INDEX < 0 (Search from Start)', () => {
        const testingCachay = new Cachay('Banana','Orange','Apple','Mango')
        const result = testingCachay.includes('Mango', -100)

        expect(result).to.equal(true)
    })
})