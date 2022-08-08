describe('pop', function() {
    
    test('in array of numbers', function() {
        const arrayOfNumbers = [0, 1, 2, 3]
        
        check(pop(arrayOfNumbers), 3)

        check(arrayOfNumbers[0], 0)
        check(arrayOfNumbers[1], 1)
        check(arrayOfNumbers[2], 2)
        check(arrayOfNumbers[3], undefined)
        check(arrayOfNumbers.length, 3)
    })

    test('in array of strings', function() {
        
    })
})



var animals = ['dog', 'cat', 'elephant']

console.log(pop(animals))
// expected output: 'elephant'

console.log(animals)
// expected output: ['dog', 'cat']