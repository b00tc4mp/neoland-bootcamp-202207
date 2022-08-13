describe('findIndex', () => {
    test('test 1 findIndex ', () => {
        const array1 = [5,12, 44, 8, 130 ];

        const found = findIndex(array1,function (element) {
            return element >13
        })
        check(found,2)      
    })

    test('test 2 findIndex if elemento no exist ', () => {
        const array1 = [5,12, 44, 8, 130 ];

        const found = findIndex(array1,function (element) {
            return element < 0
        })
        check(found,-1)   
    })
})


