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

    test('arrayOfNumbers', function () {
        const arrayOfNumbers = [0, 1, 2, 3]
        check(pop(arrayOfNumbers), 3)
        check(arrayOfNumbers[0], 0)
        check(arrayOfNumbers[1], 1)
        check(arrayOfNumbers[2], 2)
        check(arrayOfNumbers[3], undefined)
    })

    test('arrayOfanimals', function () {
        const animals = ['dog', 'cat', 'elephant']
        check(pop(animals), 'elephant')
        check(animals[0], 'dog')
        check(animals[1], 'cat')
        check(animals[2], undefined)
    })

})