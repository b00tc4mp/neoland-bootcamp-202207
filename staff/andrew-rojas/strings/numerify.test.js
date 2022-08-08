describe('numerify', function(){
    test('hello world', function(){
        check(numerify('hello world'), 'h3ll0 w0rld')
    })

    test('one two three', function() {
        check(numerify('one two three'),'0n3 tw0 thr33')
    })

    test('murcielago', function() {
        check(numerify('murcielago'),'murc13l4g0')
    })

    test('123', function() {
        check(numerify('123'),'123')
    })

    test('123', function() {
        check(numerify('123'),'123')
    })

    test('HELLO WORLD', function() {
        check(numerify('HELLO WORLD'),'H3LL0 W0RLD')
    })


})

//tests
  

console.log(numerify('hello world'))
// H3ll0 w0rld

console.log(numerify('one two three'))
// 0n3 tw0 thr33

console.log(numerify('murcielago'))
// murc13l4g0

console.log(numerify('123'))
//123

console.log(numerify('HELLO WORLD'))
//H3LL0 W0RLD

console.log(numerify('MURCIELAGO'))
//123

// function () {}