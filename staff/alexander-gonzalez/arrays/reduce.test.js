describe('reduce', function(){
  test('suma de elementos', function(){
   let numbers = [1,2,3,4]
    let initialValue = 0
    function count(initialValue, element) {
    let result = initialValue + element

    return result
  }

     result = reduce(numbers, initialValue, count)
    check(result, 10)
   



  })


})