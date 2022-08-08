describe('TESTING push in arrays',function(){
    test('Push a number and return new length & new array',function(){
        const newArray = numbers
        const resultLength = push(numbers, 7)

        check(resultLength, 5)
        check(newArray[0],0)
        check(newArray[1],1)
        check(newArray[2],2)
        check(newArray[3],3)
        check(newArray[4],7)

    })

    test('Push a string and return new length & new array',function(){
        const newArray = animals
        const resultLength = push(animals, 'monkey', 'frog')

        check(resultLength, 5)
        check(newArray[0],'cat')
        check(newArray[1],'dog')
        check(newArray[2],'elephant')
        check(newArray[3],'monkey')
        check(newArray[4],'frog')

    })
})