describe('TESTING concat arrays', function () {
    test('two arrays with numbers', function () {
        const array1 = [1, 2]
        const array2 = [3, 4, 5]
        const result = concat(array1, array2)

        check(result.length, array1.length + array2.length)
        check(result[0], array1[0])
        check(result[1], array1[1])
        check(result[2], array2[0])
        check(result[3], array2[1])
        check(result[4], array2[2])
    })


    test('two arrays with strings', function () {
        const array1 = ['h', 'o', 'l', 'a']
        const array2 = ['m', 'u', 'n', 'd', 'o']
        const result = concat(array1, array2)

        check(result.length, array1.length + array2.length)
        check(result[0], array1[0])
        check(result[1], array1[1])
        check(result[2], array1[2])
        check(result[3], array1[3])
        check(result[4], array2[0])
        check(result[5], array2[1])
        check(result[6], array2[2])
        check(result[7], array2[3])
        check(result[8], array2[4])
    })

    test('Three arrays with numbers',function(){
        const array1 = [1,2]
        const array2 = [3,4]
        const array3 = [5,6]
        const result = concat(array1,array2,array3)

        check(result.length, array1.length + array2.length + array3.length)
        check(result[0], array1[0])
        check(result[1], array1[1])
        check(result[2], array2[0])
        check(result[3], array2[1])
        check(result[4], array3[0])
        check(result[5], array3[1])

    })

    test('Four arrays with numbers', function(){
        const array1 = [1,2]
        const array2 = [3,4]
        const array3 = [5,6]
        const array4 = [7,8]
        const result = concat(array1, array2, array3, array4)

        check(result.length, array1.length + array2.length + array3.length + array4.length)
        check(result[0], array1[0])
        check(result[1], array1[1])
        check(result[2], array2[0])
        check(result[3], array2[1])
        check(result[4], array3[0])
        check(result[5], array3[1])
        check(result[6], array4[0])
        check(result[7], array4[1])
    })
  
    test('Five arrays with numbers', function(){
        const array1 = [1,2]
        const array2 = [3,4]
        const array3 = [5,6]
        const array4 = [7,8]
        const array5 = [9,10]
        const result = concat(array1, array2, array3, array4, array5)

        check(result.length, array1.length + array2.length + array3.length + array4.length + array5.length)
        check(result[0], array1[0])
        check(result[1], array1[1])
        check(result[2], array2[0])
        check(result[3], array2[1])
        check(result[4], array3[0])
        check(result[5], array3[1])
        check(result[6], array4[0])
        check(result[7], array4[1])
        check(result[8], array5[0])
        check(result[9], array5[1])
    })
})