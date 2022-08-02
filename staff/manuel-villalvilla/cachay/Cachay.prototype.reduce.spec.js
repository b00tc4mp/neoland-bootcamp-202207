describe('reduce', function () {
    it('cachay with numbers add all of them without initialValue', function () {
        const cachay = new Cachay(22, 18, 20, 25, 30)
        
        function reducer(previous, current, index, array) {
            const returns = previous + current;
            return returns;
        }
        const result = cachay.reduce(reducer)

        expect(result).to.be.a('number')
        expect(result).to.be.equal(115)
        
    })

    it('cachay with numbers add all of them with initialValue', function () {
        const cachay = new Cachay(22, 18, 20, 25, 30)
        
        function reducer(previous, current, index, array) {
            const returns = previous + current;
            return returns;
        }
        const result = cachay.reduce(reducer, 10)

        expect(result).to.be.a('number')
        expect(result).to.be.equal(125)
        
    })
    
    
})