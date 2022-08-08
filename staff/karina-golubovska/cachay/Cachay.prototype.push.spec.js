describe('Cachay.prototype.push' ,function(){
    it ('pushes animales', function(){
        const animals = ['pigs','goats','sheep']
        const count = new Cachay(animals ,'cows')

        expect (count.length).to.equal(4) 
        expect (animals.length).to.equal(count) 
        expect (animals[animals.length - 1]).to.equel('cows') 
        expect (animals[0]).to.equal('pigs')  
        expect (animals[1]).to.equal('goats') 
        expect (animals[2]).to.equal('sheep')  
    })
})

