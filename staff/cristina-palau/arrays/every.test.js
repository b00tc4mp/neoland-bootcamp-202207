describe('everyFunction', function () {
    test('arrayOfNumbers', function () {
        var arrayOfNumbers = [45, 65, 18, 76, 98, 34];
        check(every(76, arrayOfNumbers), true);
    })
    test('arrayOfAnimals', function () {
        var arrayOfAnimals = ['rat', 'dog', 'cat', 'elephant', 'jaw'];
        check(every('cat', arrayOfAnimals), true);
    })

    test('arrayOfColors', function () {
        var arrayOfColors = ['red', 'pink', 'blue', 'orange', 'yellow'];
        check(every('green', arrayOfColors), false);
    })

})


