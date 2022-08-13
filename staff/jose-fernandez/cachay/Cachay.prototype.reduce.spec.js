describe('Cachay.prototype.reduce', () => {
    it('should sum all values in a cachay of numbers', () => {
        const cachay1 = new Cachay(1, 2, 3, 4)

        const initialValue = 10;

        const sumValues = (previousValue, currentValue) => previousValue + currentValue
        

        const result = cachay1.reduce(sumValues, initialValue)
        expect(result).to.equal(20)
        expect(result).to.be.a('number')
    })

    it('should return the max value of an array of numbers', () => {
        const cachay1 = new Cachay(100, 500, 8000, 2, 9000, 3)

        const getMaxValue = (previousValue, currentValue) => Math.max(previousValue, currentValue)

        const result = cachay1.reduce(getMaxValue)

        expect(result).to.equal(9000)
        expect(result).to.be.a('number')
    })
    it('should sum all values in a cachay of numbers', () => {
        const cachay1 = new Cachay(1, 2, 3, 4)

        const sumValues = (previousValue, currentValue) => previousValue + currentValue
        
        const result = cachay1.reduce(sumValues)
        expect(result).to.equal(10)
        expect(result).to.be.a('number')
    })
})