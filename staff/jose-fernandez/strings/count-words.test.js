describe('count-words', function () {
   test(' adiós      mundo cruel  ', function() {
       check(countWords(' adiós      mundo cruel  '), 3)
   })
   
   test('hello    world', function() {
       check(countWords('hello    world'), 2)
   })
   
   test('1 2 3 4 5', function() {
       check(countWords('0 1 2 3 4 5'), 6)
   })
})



