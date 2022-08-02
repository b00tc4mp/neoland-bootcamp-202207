describe('every', function () {
    it('cachay with numbers returns true', function () {
        const cachay = new Cachay(22, 18, 20, 25, 30)
        

        const result = cachay.every((age) => age >= 18)

        expect(result).to.be.a('boolean')
        // expect(result.length).to.be.equal(cachay1.length + cachay2.length)
        expect(result).to.be.equal(true)
        
    })

    it('cachay with numbers returns false', function () {
        const cachay = new Cachay(10, 18, 20, 25, 30)
        

        const result = cachay.every((age) => age >= 18)

        expect(result).to.be.a('boolean')
        expect(result).to.be.equal(false)
        
    })
    
    
})