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
})