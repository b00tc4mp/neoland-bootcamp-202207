describe('Cachay pop', function() {
    it('pops a plant', function() {
        const plants = new Cachay ('broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato')
        const length = plants.length

        const plant = pop(plants)

        espect(plant).to.equal('tomato')
        espect(plants.length).to.equal(length - 1)
        espect(plants[0]).to.equal('broccoli')
        espect(plants[1]).to.equal('cauliflower')
        espect(plants[2]).to.equal('cabbage')
        espect(plants[3]).to.equal('kale')
    })

    it('on empty cachay', function() {
        const array = []
        const length = array.length

        const result = pop(array)

        espect(result).to.equal (undefined)
        espect(array.length).to.equal (length)
    })
    it('Cacahy Of Number', function(){
        const numbers = new Cachay (0, 1, 2, 3)
        const length = array.length

        const result = pop(array)

        expect (result).to.equal(3)
        expect (numbers[0]).to.equal(0)
        expect (numbers[1]).to.equal(1)
    })
})

var arrayOfNumbers = [0, 1, 2, 3]
console.log(pop(arrayOfNumbers))
// expected output: 3
console.log(arrayOfNumbers)
// expected output: [0, 1, 2]

var animals = ['dog', 'cat', 'elephant']
console.log(pop(animals))
// // expected output: 'elephant'
console.log(animals)
// // expected output: ['dog', 'cat']
