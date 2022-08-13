describe('forEach', function() {
    test('iterate numbers', function() {
        const nums = [1, 2, 3]
        const result = []

        forEach(nums, function(num) {
            //result.push(num)
            result[result.length] = num
        })

        check(result.length, nums.length)
        check(result[0], nums[0])
        check(result[1], nums[1])
        check(result[2], nums[2])
    })

    test('iterate strings', function() {
        const strings = ['hola', 'mundo', 'yupi']
        let result = ''

        const concatenate = function(string) { result += string }

        forEach(strings, concatenate)

        check(result.length, strings[0].length + strings[1].length + strings[2].length)
        check(result, strings[0] + strings[1] + strings[2])
    })
})