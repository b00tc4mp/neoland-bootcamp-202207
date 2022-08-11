describe('array.prototype.find',function() {
  test('find the first number greater than 10' function() {
    const array1 = [5, 12, 8, 130, 44];

    const found = array1.find(function(element) {
      return element > 10
    })

    check(found, 12)
    check(found, array1[1])
  })

  test('find an user that has 1234 id', function() {
    const user = [
      {name:'cancito', id:1234}
      {name: 'pepito, id: 1743'} ]

      const userFound = user.find(function (user) {
        return user.id === 1234
      })

      check(userFound instanceof Object, true)
      check(userFound, user[0])
      check(userFound.name, 'cancito')
  })
  

})