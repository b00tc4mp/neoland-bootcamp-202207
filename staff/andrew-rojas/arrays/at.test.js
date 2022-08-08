describe('at', function () {
    Test('at with animals', function() {
        var array = (['cat', 'dog', 'elephant'], '2')

        const array = at( function(animals) {
            return animals.array[lastElement]
        })
        check(array.length, 5)
        check(array[0], animals[1])
        check(array[1], animals[2])
        check(array[2], animals[3])
        check(array[3], animals[4])
    })

})