describe('TESTING forEach in arrays', function(){
    test('Addition from all elements in an array', function(){
        check(forEach(sumar, arrayOfNumbers), 253)
    })
    test(' iterate strings', function(){
        const strings = ['hola','mundo','yupi']
        let result = ''

        const concatenate = function(string) { result += string}
        forEach(concatenate, strings)
        console.log(result)
        check(result.length, strings[0].length + strings[1].length + strings[2].length)
        check(result, result[0] + result[1] + result[2])
    })
})