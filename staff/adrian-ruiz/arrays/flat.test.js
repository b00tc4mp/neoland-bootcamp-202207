describe('TESTING flat in arrays', function(){
    test('Flat depth 1 (default)',function(){
        const arrayToTest = [1,2,[3,4]]
        //[1,2,3,4]
        const arrayResult = flat(arrayToTest)

        check(arrayResult[0],1)
        check(arrayResult[1],2)
        check(arrayResult[2],3)
        check(arrayResult[3],4)
    })

    test('Flat depth 2',function(){
        const arrayToTest = [1,2,[3,4,[5,6]]]

        const arrayResult = flat(arrayToTest,2)
        //[1, 2, 3, 4, 5, 6]

        check(arrayResult[0],1)
        check(arrayResult[1],2)
        check(arrayResult[2],3)
        check(arrayResult[3],4)
        check(arrayResult[4],5)
        check(arrayResult[5],6)
    })

    test('Flat depth 0 -> [0, 1, 2, [[3, 4]]]', function(){
        const arrayToTest =[0, 1, 2, [[3, 4]]]

        const arrayResult = flat(arrayToTest)

        check(arrayResult[0],0)
        check(arrayResult[1],1)
        check(arrayResult[2],2)
        check(arrayResult[3][0],3)
        check(arrayResult[3][1],4)
    })
})