describe('Array.prototype.map', () => {
test('map people to strings', ()=>{

  const people = [


{name: 'peter', surname: 'pan', age: 15},
{name:'james', surname: 'hook', age:40},
{name: 'pepito', surname: 'grillo', age: 50},
{name: 'wendy', surname: 'pan',age:14},
{name:'pin', surname:'ocho', age: 8},
]

const toString = function(person){
  return person.name + " " + person.surname + "("+ person.age +")";
}

})

})









/*describe("map", function () {
  test("power number", function () {
    const number = [1, 2, 3];
    const result = map(number, callback);

    function callback(val) {
      var result = 1;

      for (var i = 0; i < 2; i++) {
        result = result * val;
      }
      return result;
    }

    check(result.length, number.length);
    check(result[0], number[0] * number[0]);
    check(result[1], number[1] * number[1]);
    check(result[2], number[2] * number[2]);
  });
  





});*/
