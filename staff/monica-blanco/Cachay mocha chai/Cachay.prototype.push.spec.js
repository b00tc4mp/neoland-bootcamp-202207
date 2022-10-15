describe('Cachay push', function() {
    it('Pushes one animal', function() {
        const animals = new Cachay ('pigs', 'goats', 'sheep')
        const length = animals.length

        let count = animals.push('cows')

        expect(count).to.equal (length + 1)
        expect(animals.length).to.equal(length + 1)
        expect(animals[animals.length - 1]).to.equal('cows')
        expect(animals[0]).to.equal('pigs')
        expect(animals[1]).to.equal('goats')
        expect(animals[2]).to.equal('sheep')
    })

    it('Pushes various animals', function() {
        const animals = new Cachay ('pigs', 'goats', 'sheep')
        const length = animals.length

        let count = animals.push('cows', 'wolves', 'snakes')

        expect(count).to.equal (length + 3)
        expect(animals.length).to.equal (length + 3)
        expect(animals[animals.length - 3]).to.equal('cows')
        expect(animals[animals.length - 2]).to.equal('wolves')
        expect(animals[animals.length - 1]).to.equal('snakes')
        expect(animals[0]).to.equal('pigs')
        expect(animals[1]).to.equal('goats')
        expect(animals[2]).to.equal('sheep')
    })
})