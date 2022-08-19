describe('arrayFilter', function () {
    it('filter Pan family', function () {
        const people = new Cachay(
            { name: 'Peter', surname: 'Pan', age: 15 },
            { name: 'James', surname: 'Hook', age: 40 },
            { name: 'Pepito', surname: 'Grillo', age: 50 },
            { name: 'Wendy', surname: 'Pan', age: 14 },
            { name: 'Pin', surname: 'Ocho', age: 8 }
        )

        const pans = people.filter(function (person) {
            return person.surname === 'Pan'
        })
        expect(pans.length, 2)
        expect(pans[0]).to.equal(people[0])
        expect(pans[1]).to.equal(people[3])
    })
    it('filter by Age >=18', function () {
        const people = new Cachay(
            { name: 'Peter', surname: 'Pan', age: 15 },
            { name: 'James', surname: 'Hook', age: 40 },
            { name: 'Pepito', surname: 'Grillo', age: 50 },
            { name: 'Wendy', surname: 'Pan', age: 14 },
            { name: 'Pin', surname: 'Ocho', age: 8 }
        )
        const olderThan18 = people.filter(function (person) {
            return person.age >= 18
        })

        expect(olderThan18.length, 2)
        expect(olderThan18[0]).to.equal(people[1])
        expect(olderThan18[1]).to.equal(people[2])
    })

    it('filter array of numers', function () {
        const numbers = new Cachay(10, 28, 17, 14, 25, 64, 15, 13, 19)

        const more18 = numbers.filter(function (num) {
            return num >= 18
        })

        expect(more18.length, 4)
        expect(more18[0]).to.equal(numbers[1])
        expect(more18[1]).to.equal(numbers[4])
        expect(more18[2]).to.equal(numbers[5])
        expect(more18[3]).to.equal(numbers[8])
    })
})
