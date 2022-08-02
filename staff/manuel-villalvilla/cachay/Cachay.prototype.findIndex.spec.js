describe('findIndex', function () {
    it('cachay with numbers', function () {

        const cachay = new Cachay(5, 12, 8, 130, 44)
        

        const result = cachay.findIndex((age) => age >= 18)

        expect(result).to.be.a('number')
        // expect(result.length).to.be.equal(4)
        expect(result).to.be.equal(3)
        
    })

    it('cachay with numbers negative result', function () {

        const cachay = new Cachay(5, 12, 8, 130, 44)
        

        const result = cachay.findIndex((age) => age >= 180)

        expect(result).to.be.a('number')
        
        expect(result).to.be.equal(-1)
        
    })

    it('cachay with strings', function () {

    
        const cachay = new Cachay("apple", "banana", "cantaloupe", "blueberries", "grapefruit")
        

        const result = cachay.findIndex((fruit) => fruit === 'cantaloupe')

        
        
        expect(result).to.be.a('number')
        expect(result).to.be.equal(2)
        

        
    })
    
    
})