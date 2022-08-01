describe('push',function(){
    it('pushes one animal', function(){
        const animals  = new Cachay('pigs', 'goats','sheeps')
        const length = animals.length

        let count = animals.push('cows')

        expect(count).to.equal(length+1)
        expect(animals.length).to.equal(length + 1)
        expect(animals(animals.length -1)).to.equal('cows')
        expect(animals[0]).to.equal('pigs')
        expect(animals[1]).to.equal('goats')
        expect(animals[2]).to.equal('sheep')
    })  
})