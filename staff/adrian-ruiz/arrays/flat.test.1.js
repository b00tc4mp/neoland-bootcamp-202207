describe('TESTING flat in arrays', function(){
    test('Flat depth 1 (default)',function(){
        arrayToTest = [1,2,[3,4]]
        //[1,2,3,4]
        arrayResult = flat(arrayToTest)

        check(arrayResult[0],1)
        check(arrayResult[1],2)
        check(arrayResult[2],3)
        check(arrayResult[3],4)
    })

    test('Flat depth 2',function(){
        array1 = [1,2,[3,4,[5,6]]]

        console.log(flat(array1))
        //[1, 2, 3, 4, 5, 6]


    })
})