describe('push', function(){
    test('push', function() {
        const animals = ['pigs', 'goats', 'sheep']

        const count = push(animals, 'cows')

        check(count, +1)
        check(count, length + 1)
        check(animals.length, length + 1)
        check(animals [animals.length - 1],'cows')
        check(animals[0], 'pigs')
        check(animals[1], 'goats')
        check(animals[2], 'sheep')
     
    })

    test('pushes various animals', function() {
        const animals = ['pigs', 'goats', 'sheep']
        const length = animals.length

        let count = push(animals, 'cows', 'wolves', 'snakes')

        check(count, length + 3)
        check(animals.length, length + 3)
        check(animals[animals.length - 3], 'cows')
        check(animals[animals.length - 2], 'wolves')
        check(animals[animals.length - 1], 'snakes')
        check(animals[0], 'pigs')
        check(animals[1], 'goats')
        check(animals[2], 'sheep')
    })
})