describe('push', function () {
    test('pushes one animals', function () {
        const animals = ['pigs', 'goats', 'sheep']
        const length = animals.length
        let count = push(animals, 'cows')

        check(count, 4)
        check(animals.length, length + 1)
        check(animals[animals.length - 1], 'cows')
        check(animals[0], 'pigs')
        check(animals[1], 'goats')
        check(animals[2], 'sheep')
    })
    
    test('pushes various animals', function () {
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

var numbers = [0, 1, 2, 3]

console.log(push(numbers, 7))
// expected output: 5

console.log(numbers)
// expected output: [0, 1, 2, 3, 7]

var animals = ['cat', 'dog', 'elephant']

console.log(push(animals, 'monkey', 'frog'))
// expected output: 5

console.log(animals)
// expected output: ['cat', 'dog', 'elephant', 'monkey', 'frog']


// let newArray = array

// for (let i = 0; i < push.arguments.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//         if (array[j] === array.length - 1)
//         newArray = array + element

//         array = newArray
//         return newArray
//     }
// }