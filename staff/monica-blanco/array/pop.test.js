describe('pop', function() {
    test('pops a plant', function() {
        const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato']
        const length = plants.length

        const plant = pop(plants)

        check(plant, 'tomato')
        check(plants.length, length - 1)
        check(plants[0], 'broccoli')
        check(plants[1], 'cauliflower')
        check(plants[2], 'cabbage')
        check(plants[3], 'kale')
    })

    test('on empty array', function() {
        const array = []
        const length = array.length

        const result = pop(array)

        check(result, undefined)
        check(array.length, length)
    })
    test ('Array Of Number', function(){
        const numbers = [0, 1, 2, 3]
        const length = array.length

        const result = pop(array)

        check (result, 3)
        check (numbers[0], 0)
        check (numbers[1], 1)
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
