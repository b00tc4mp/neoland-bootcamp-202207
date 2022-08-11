describe('map', function() {
  test('multiply all the number in the array by 2', function () { 
      const array1 = [1, 4, 9, 16];

      const map1 = map(array1.map, function (x) { 
        return x * 2
      });
      

      check(array1.length, 4)
      check(array1[0], 1)
      check(array1[1], 4)
      check(array1[2], 9)
      check(array1[3], 16)

      check(map1 instanceof Array, true)
      //verifico si map1contiene la referencia a un array

      check(map1.length, 4)
      check(map1[0], 2)
      check(map1[1], 8)
      check(map1[2], 18)
      check(map1[3], 32)

    })
})