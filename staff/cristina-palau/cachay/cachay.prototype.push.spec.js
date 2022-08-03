describe('Cachay.prototype.push', function () {
    it('pushes one animals', function () {

        
        const animals = new Cachay('pigs', 'goats', 'sheep')
        const length = animals.length
        let result = animals.push('cows')

        expect(result).to.be.equal(4)
        expect(animals.length).to.be.equal(length + 1)
        expect(animals[animals.length - 1]).to.be.equal('cows')
        expect(animals[0]).to.be.equal('pigs')
        expect(animals[1]).to.be.equal('goats')
        expect(animals[2]).to.be.equal('sheep')
    })
    
    it('pushes various animals', function () {
        const animals = new Cachay('pigs', 'goats', 'sheep')
        const length = animals.length
        let result = animals.push('cows', 'wolves', 'snakes')

        expect(result).to.be.equal(length + 3)
        expect(animals.length).to.be.equal(length + 3)
        expect(animals[animals.length - 3]).to.be.equal('cows')
        expect(animals[animals.length - 2]).to.be.equal('wolves')
        expect(animals[animals.length - 1]).to.be.equal('snakes')
        expect(animals[0]).to.be.equal('pigs')
        expect(animals[1]).to.be.equal('goats')
        expect(animals[2]).to.be.equal('sheep')
    })
})
