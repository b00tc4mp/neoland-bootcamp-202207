var arrayOfNumbers = [0, 1, 2, 3]

var animals = ['dog', 'cat', 'elephant']


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
        check(pop(animals),'elephant')

        check(animals[0], 'dog')
        check(animals[1], 'cat')
        check(animals[2], undefined)
    })

    const emptyArray = []
    test('empty array',function(){
        check(pop(emptyArray),undefined)
        check(emptyArray.length, 0)
    })
})