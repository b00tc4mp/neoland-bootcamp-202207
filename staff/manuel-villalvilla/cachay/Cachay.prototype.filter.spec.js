describe('filter', function () {
    it('cachay with numbers', function () {

        const cachay = new Cachay(10, 28, 17, 14, 25, 64, 15, 13, 19)
        

        const result = cachay.filter((age) => age >= 18)

        expect(result).to.be.instanceof(Cachay)
        expect(result.length).to.be.equal(4)
        expect(result[0]).to.be.equal(28)
        expect(result[1]).to.be.equal(25)
        expect(result[2]).to.be.equal(64)
        expect(result[3]).to.be.equal(19)
        
    })

    it('cachay with strings', function () {

    function filterSurname (person) {
        return person.surname === 'Pan';
    }
        const cachay = new Cachay(
            { name: 'Peter', surname: 'Pan' },
            { name: 'James', surname: 'Hook' },
            { name: 'Pepito', surname: 'Grillo' },
            { name: 'Wendy', surname: 'Pan' },
            { name: 'Pinocho', surname: 'Grillo' }
            )
        

        const result = cachay.filter(filterSurname)

        
        expect(result).to.be.instanceof(Cachay)
        expect(result.length).to.be.equal(2)
        expect(result[0].name).to.be.equal('Peter')
        expect(result[0].surname).to.be.equal('Pan')
        expect(result[1].name).to.be.equal('Wendy')
        expect(result[1].surname).to.be.equal('Pan')
        
    })
    
    
})