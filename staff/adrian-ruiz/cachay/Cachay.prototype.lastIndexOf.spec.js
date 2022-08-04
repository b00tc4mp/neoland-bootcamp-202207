describe('TESTING Cachay lastIndexOf', () => {
    it('Succeeds returning lastIndex from one Cachay with undefined starting index',() => {
        const testingCachay = new Cachay("Orange", "Apple", "Mango", "Apple", "Banana", "Apple")
        const result = testingCachay.lastIndexOf('Apple')

        expect(result).to.equal(5)
    })

    it('Succeeds returning lastIndex from one Cachay starting from index 4', () => {
        const testingCachay = new Cachay("Orange", "Apple", "Mango", "Apple", "Banana", "Apple")
        const result = testingCachay.lastIndexOf('Apple', 3)

        expect(result).to.equal(3)
    })

    it('Succeeds returning -1 on UNEXISTING element',() => {
        const testingCachay = new Cachay("Orange", "Apple", "Mango", "Apple", "Banana", "Apple")
        const result = testingCachay.lastIndexOf('Cherry')

        expect(result).to.equal(-1)
    })
})