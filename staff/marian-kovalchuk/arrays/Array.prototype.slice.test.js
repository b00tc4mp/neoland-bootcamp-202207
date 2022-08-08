describe('Array.prototype.splice', () => {
test ('splice starting from index', () => {

    // const months = ['Jan', 'March', 'April', 'May']

    // const result = months.splice(1, 0, 'Feb');

    check(result instanceof Array, true)
    check(result.length, 0)

    check(months.length, 5)

    check(months[0], 'Jan')
    check(months[1], 'Feb')
    check(months[2], 'Mar')
    check(months[3], 'Apr')
    check(months[4], 'May')

})

})