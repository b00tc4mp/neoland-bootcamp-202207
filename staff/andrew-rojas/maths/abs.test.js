describe('abs', function(){
    test('2 - 7', function(){
        check(abs('2 - 7'), '5')
    })

    test('2 * 10 * -9', function(){
        check(abs('2 * 10 * -9'), '180')
    })

    test('', function(){
        check(abs('1.2345 - 9.8765'), '8.642')
    })
})


// demos

console.log(abs(2 - 7))
// 5

console.log(abs(2 * 10 * -9))
// 180

console.log(abs(1.2345 - 9.8765))
// 8.642



// if (value < 0){
//     return value * -1
// else
//    return value
// }

// {
//     return value < 0? value * -1 : value 
// }
   