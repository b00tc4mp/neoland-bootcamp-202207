describe('array.prototype.map',function() {
  test('mao people to string', function(){
    const people = [
      { name: 'petter', surname: 'pan', age: 15 },
      { name: 'wendy', surname: 'hook', age: 40 },
      { name: 'james', surname: 'pan', age: 50 },
      { name: 'pepito', surname: 'grillo', age: 14 },
      { name: 'pinocho', surname: 'grillo', age: 8 },
  ]

  const toString= function(person) {
    return person.name + ' ' + person.surname + ' (' + person.age + ')' 
  }

  const strings= people.map(toString)
  
  check(strings.lengthh, people.lenth)
  check(strings[0], 'petter pan (15)')
  check(strings[1], 'wendy hook (40)')
  check(strings[2], 'james pan (50)')
  check(strings[3], 'pepito grillo (14)')
  check(strings[4], 'pinocho grillo (8)')

  })
})