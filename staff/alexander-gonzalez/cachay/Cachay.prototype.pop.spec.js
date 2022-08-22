describe('pop', function() {
    it('pops a plant', function(){
        const plants = new Cachay('broccoli', 'cauliflower','cabbage','kale', 'tomato')
        const length = plants.length
        const plant = plants.pop(plants)

         
        expect(plant.to.equal[tomato])
        expect(plants.length.to.be.instanceof(length -1))
        expect(plants[0].to.equal[broccoli])
        expect(plants[1].to.equal[cauliflower])
        expect(plants[2].to.equal[cabbage])
        expect(plants[3].to.equal[kale])

    })


    
    it('in array of numbers', function() {
        const arrayOfNumbers = new Cachay(0, 1, 2, 3)
        
        expect((arrayOfNumbers).to.be.a[3])

        expect(arrayOfNumbers[0].to.equal[0])
        expect(arrayOfNumbers[1].to.equal[1])
        expect(arrayOfNumbers[2].to.equal[2])
        expect(arrayOfNumbers[3].to.equal(undefined))
        expect(arrayOfNumbers.length.to.equal[3])
    })

    //test('in array of strings', function() {
        
    })




