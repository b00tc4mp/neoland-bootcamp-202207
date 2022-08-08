describe('Cachay.prototype.map', () => {
    it('map people to strings', () => {
        const people = new Cachay(
            { name: 'Peter', surname: 'Pan', age: 15 },
            { name: 'James', surname: 'Hook', age: 40 },
            { name: 'Pepito', surname: 'Grillo', age: 50 },
            { name: 'Wendy', surname: 'Pan', age: 14 },
            { name: 'Pin', surname: 'Ocho', age: 8 }
        )

        const toString = function(person) {
            return person.name + ' ' + person.surname + ' (' + person.age + ')'
        }

        const strings = people.map(toString)

        expect(strings).to.be.instanceof(Cachay)

        expect(strings.length).to.equal(people.length)
        expect(strings[0]).to.equal('Peter Pan (15)')
        expect(strings[1]).to.equal('James Hook (40)')
        expect(strings[2]).to.equal('Pepito Grillo (50)')
        expect(strings[3]).to.equal('Wendy Pan (14)')
        expect(strings[4]).to.equal('Pin Ocho (8)')
    })

    it('map full names to uppercase', () => {
        const people = new Cachay (
            { name: 'Peter', surname: 'Pan', age: 15 },
            { name: 'James', surname: 'Hook', age: 40 },
            { name: 'Pepito', surname: 'Grillo', age: 50 },
            { name: 'Wendy', surname: 'Pan', age: 14 },
            { name: 'Pin', surname: 'Ocho', age: 8 }
        )

        const toUpperCase = function(person) {
            return person.name.toUpperCase() + ' ' + person.surname.toUpperCase()
        }

        const uppercases = people.map(toUpperCase)

        expect(uppercases).to.be.instanceof(Cachay)
        expect(uppercases.length).to.equal(people.length)
        expect(uppercases[0]).to.equal('PETER PAN')
        expect(uppercases[1]).to.equal('JAMES HOOK')
        expect(uppercases[2]).to.equal('PEPITO GRILLO')
        expect(uppercases[3]).to.equal('WENDY PAN')
        expect(uppercases[4]).to.equal('PIN OCHO')
    })
})