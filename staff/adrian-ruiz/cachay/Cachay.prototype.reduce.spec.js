describe('TESTING Cachay reduce', () => {
    it('Should sum all values in a cachay of numbers with defined InitialValue', () => {
        const testingCachay = new Cachay(1, 2, 3, 4)

        const initialValue = 0

        const sumValues = (previousValue, currentValue) => previousValue + currentValue

        const result = testingCachay.reduce(sumValues, initialValue)

        expect(result).to.equal(10)
    })

    it('Should sum all values in a cachay of numbers with UNDEFINED initialValue', () => {
        const testingCachay = new Cachay(1, 2, 3, 4)


        const sumValues = (previousValue, currentValue) => previousValue + currentValue

        const result = testingCachay.reduce(sumValues)
        expect(result).to.equal(10)
    })

    it('Should return the max value of a Cachay of numbers', () => {
        const testingCachay = new Cachay(100, 500, 8000, 2, 9000, 3)

        const getMaxValue = (previousValue, currentValue) => Math.max(previousValue, currentValue)

        const result = testingCachay.reduce(getMaxValue)

        expect(result).to.equal(9000)
        expect(result).to.be.a('number')
    })

    it('Should return Initial value when Cachay length is 0 WITHOUT USING CALLBACK FN', () => {
        const testingCachay = new Cachay()
        const initialValue = 10
        const sumValues = (previousValue, currentValue) => previousValue + currentValue
        const result = testingCachay.reduce(sumValues,initialValue)

        expect(result).to.equal(10)
        expect(result).to.be.a('number')
    })

    it('Should return THE ONLY element when Initial Value UNDEFINED WITHOUT USING CALLBACK FN', () => {
        const testingCachay = new Cachay(20)
        const sumValues = (previousValue, currentValue) => previousValue + currentValue
        const result = testingCachay.reduce(sumValues)

        expect(result).to.equal(20)
        expect(result).to.be.a('number')
    })

    it('Should use INDEX in Callback FN',() => {
        const testingCachay = new Cachay(5,10,20,30)
        const sumOrMultiply = function(previousValue, currentValue, index){
            if(index < 2)
                return previousValue + currentValue
            else
                return previousValue * currentValue
        }
        const result = testingCachay.reduce(sumOrMultiply)

        expect(result).to.equal(9000)
        expect(result).to.be.a('number')
    })

    it('Callback Should USE CACHAY', () => {
        const testingCachay = new Cachay(5,10,20,30)
        const useArray = function(previousValue, currentValue, index, Cachay){
            if(Cachay[index+1] === Cachay[2])
                return previousValue * currentValue
            else return previousValue + currentValue
        }

        const result = testingCachay.reduce(useArray)

        expect(result).to.equal(100)
        expect(result).to.be.a('number')
    })


    it('Should THROW ERROR when Cachay length is 0 and initialValue is not defined', () => {
        const testingCachay = new Cachay()
        const sumValues = (previousValue, currentValue) => previousValue + currentValue
        expect(function() { testingCachay.reduce(sumValues)}).to.throw(TypeError, 'The Cachay contains no elements and initialValue is not provided')
    })
    
})