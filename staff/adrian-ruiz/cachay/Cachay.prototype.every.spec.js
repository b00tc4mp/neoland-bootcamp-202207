describe('TESTING Cachay every', () => {
    it('Check age in a Cachay of numbers that returns true', () => {
        function checkAge1 (age) {
            return age >= 18;
        }
        const testingCachay = new Cachay(20,25,18,30)
        
        const result = testingCachay.every(checkAge1)
        
        expect(result).to.equal(true)
        
    })

    it('Check age in a Cachay of numbers that returns false', () => {
        function checkAge2 (age) {
            return age >= 20;
        }

        const testingCachay = new Cachay(20,25,18,30)
        
        const result = testingCachay.every(checkAge2)
        
        expect(result).to.equal(false)
        
    })
})


