describe('TESTING some in arrays', function(){
    test('Check if an array of numbers has an age >= 90',function(){
        check(some(checkAge1, arrayOfNumbers), true)
        
    })

    test('Check if an array of numbers has an age < 18',function(){
        check(some(checkAge2, arrayOfNumbers), false)
    })

    
    
})
/* console.log(some(checkAge1, arrayOfNumbers));
// expected output true

console.log(some(checkAge2, arrayOfNumbers));
// expected output false */
