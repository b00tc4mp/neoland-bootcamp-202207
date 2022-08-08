describe ('countChars', function (){ 
    test('hola mundo', function(){ 
        check(countChars ('hola mundo'), '10')
})

test('hello world', function(){ 
    check(countChars('hello world'),'11')
})

test('1 2 3 4 5', function(){
    check(countChars('1 2 3 4 5'), '9')
})

})


// tests

console.log(countChars('hola mundo'))
// 10

console.log(countChars('hello world'))
// 11

console.log(countChars('1 2 3 4 5'))
// 9