describe('TESTING Cachay filter', () => {
    it('Filter an number array', () => {
        const cachayTesting = new Cachay(10, 28, 17, 14, 25, 64, 15, 13, 19)
        function filterAge(age){
            return age >= 18
        }
        result = cachayTesting.filter(filterAge)

        expect(result).to.be.instanceof(Cachay)
        expect(result.length).to.equal(4)
        expect(result[0]).to.equal(28)
        expect(result[1]).to.equal(25)
        expect(result[2]).to.equal(64)
        expect(result[3]).to.equal(19)
    })

    it('Filter by surname in a Cachay of Objects', () => {
        const cachayTesting = new Cachay (
            {name: 'Adrian', surname: 'Ruiz' },
            {name: 'Pepe', surname: 'Rodriguez'},
            {name: 'Jose', surname: 'Sanchez'},
            {name: 'Juan', surname: 'Ruiz'}
        )
        function filterSurname(person){
            return person.surname === 'Ruiz'
        }
        result = cachayTesting.filter(filterSurname)

        expect(result).to.be.instanceof(Cachay)
        expect(result.length).to.equal(2)
        expect(result[0]).to.equal(cachayTesting[0])
        expect(result[1]).to.equal(cachayTesting[3])
    })
})