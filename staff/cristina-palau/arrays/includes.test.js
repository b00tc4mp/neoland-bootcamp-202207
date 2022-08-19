describe('includes in array', function () {
    test('includes in array of Numbers', function () {
        const arrayOfNumbers = [1, 2, 3];
        const searchElement = 2;
        const result = includes(arrayOfNumbers, searchElement)

        check(result, true)
    })

    test('includes in array of Animals', function () {
        const arrayOfAnimals = ['cat', 'dog', 'bat'];
        const searchElement = 'cat';
        const result = includes(arrayOfAnimals, searchElement)
        check(result, true)
    })

    test('no-includes in array of Animals', function () {
        const arrayOfAnimals = ['cat', 'dog', 'bat'];
        const searchElement = 'at';
        const result = includes(arrayOfAnimals, searchElement)
        check(result, false)
    })
})