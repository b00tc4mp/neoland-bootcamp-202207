describe('splice', () => {
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

    test('remove element at index', () => {
        const fish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']
        const removed = splice(fish, 1, 1)

        // expected
        // fish -> ['angel', 'drum', 'mandarin', 'sturgeon']
        // removed -> ['clown']

        check(removed instanceof Array, true)
        check(removed.length, 1)
        check(removed[0], 'clown')

        check(fish.length, 4)
        check(fish[0], 'angel')
        check(fish[1], 'drum')
        check(fish[2], 'mandarin')
        check(fish[3], 'sturgeon')
    })

    test('remove elements from index', () => {
        const fish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']
        const removed = splice(fish, 1, 2)

        // expected
        // fish -> ['angel', 'mandarin', 'sturgeon']
        // removed -> ['clown', 'drum']

        check(removed instanceof Array, true)
        check(removed.length, 2)
        check(removed[0], 'clown')
        check(removed[1], 'drum')

        check(fish.length, 3)
        check(fish[0], 'angel')
        check(fish[1], 'mandarin')
        check(fish[2], 'sturgeon')
    })

    test('remove 2 elements from last index', () => {
        const fish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']
        const removed = splice(fish, 4, 2)

        // expected
        // fish -> ['angel', 'clown', 'drum', 'mandarin']
        // removed -> ['sturgeon']

        check(removed instanceof Array, true)
        check(removed.length, 1)
        check(removed[0], 'sturgeon')

        check(fish.length, 4)
        check(fish[0], 'angel')
        check(fish[1], 'clown')
        check(fish[2], 'drum')
        check(fish[3], 'mandarin')
    })

    test('replace elements', () => {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jun', 'Jun', 'Jun', 'Jul']

        const result = splice(months, 4, 3, 'May');

        // expected
        // months -> ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
        // result -> ['Jun', 'Jun', 'Jun']

        check(result instanceof Array, true)
        check(result.length, 3)
        check(result[0], 'Jun')
        check(result[1], 'Jun')
        check(result[2], 'Jun')

        check(months.length, 7)
        check(months[0], 'Jan')
        check(months[1], 'Feb')
        check(months[2], 'Mar')
        check(months[3], 'Apr')
        check(months[4], 'May')
        check(months[5], 'Jun')
        check(months[6], 'Jul')
    })

    test('replace elements (2)', () => {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', '1', '2', '3', '4', '5', 'Jul', 'Ago']

        const result = splice(months, 4, 5, 'May', 'Jun');

        // expected
        // months -> ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Ago']
        // result -> ['1', '2', '3', '4', '5']

        check(result instanceof Array, true)
        check(result.length, 5)
        check(result[0], '1')
        check(result[1], '2')
        check(result[2], '3')
        check(result[3], '4')
        check(result[4], '5')

        check(months.length, 8)
        check(months[0], 'Jan')
        check(months[1], 'Feb')
        check(months[2], 'Mar')
        check(months[3], 'Apr')
        check(months[4], 'May')
        check(months[5], 'Jun')
        check(months[6], 'Jul')
        check(months[7], 'Ago')
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