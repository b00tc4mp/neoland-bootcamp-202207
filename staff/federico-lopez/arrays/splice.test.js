describe('Array.prototype.splice', () => {
    test('insert at index', () => {
        const months = ['Jan', 'Mar', 'Apr', 'May']

        const result = splice(months, 1, 0, 'Feb')

        // expected
        // months -> ['Jan', 'Feb', 'Mar', 'Apr', 'May']
        // result -> []

        check(result instanceof Array, true)
        check(result.length, 0)

        check(months.length, 5)
        check(months[0], 'Jan')
        check(months[1], 'Feb')
        check(months[2], 'Mar')
        check(months[3], 'Apr')
        check(months[4], 'May')
    })

    test('replace elements', () => {
        debugger
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jun', 'Jun', 'Jul']

        const result = splice(months, 4, 2, 'May');

        // expected
        // months -> ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
        // result -> ['Jun', 'Jun']

        check(result instanceof Array, true)
        check(result.length, 2)
        check(result[0], 'Jun')
        check(result[1], 'Jun')

        check(months.length, 7)
        check(months[0], 'Jan')
        check(months[1], 'Feb')
        check(months[2], 'Mar')
        check(months[3], 'Apr')
        check(months[4], 'May')
        check(months[5], 'Jun')
        check(months[6], 'Jul')
    })

    test('remove element at index', () => {
        const fish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']
        const removed = splice(fish, 3, 1)

        // expected
        // fish -> ['angel', 'clown', 'drum', 'sturgeon']
        // removed -> ['mandarin']

        check(removed instanceof Array, true)
        check(removed.length, 1)
        check(removed[0], 'mandarin')

        check(fish.length, 4)
        check(fish[0], 'angel')
        check(fish[1], 'clown')
        check(fish[2], 'drum')
        check(fish[3], 'sturgeon')
    })

    test('remove element from negative index', () => {
        const fish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']
        const removed = splice(fish, -3, 2)

        // expected
        // fish -> ['angel', 'clown', 'sturgeon']
        // removed -> ['drum', 'mandarin']

        check(removed instanceof Array, true)
        check(removed.length, 2)
        check(removed[0], 'drum')
        check(removed[1], 'mandarin')

        check(fish.length, 3)
        check(fish[0], 'angel')
        check(fish[1], 'clown')
        check(fish[2], 'sturgeon')
    })
})