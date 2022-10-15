describe('Array.prototype.map', function () {
    test('multiply all the numbers in the array', function() {
        const array1 = [1,4,9,16]
        
        const map1 = array1.map(function(x){
            return x * 2
        })
        check(array1.length, 4)
        check(array1[0], 1)
        check(array1[1], 4)
        check(array1[2], 9)
        check(array[3], 16)
        check (map1 instanceof Array, true)
        // verifico si el map1 contiene la referencia a una array
        
        check(map1.length, 4)
        check(map1[0], 2)
        check(map1[1], 8)
        check(map1[2], 18)
        check(map1[3], 32)
    })
    test ('increase prices a 20%', function(){
        const productsList = [
            {name: 'milk', pice: 20},
            {name: 'beer', price: 10},
            {name: 'water', price: 20},
            {name: 'sugar', price: 40}
        ]
        const newProductsList = productsList.map(function(product){
            return { name: product.name , price: (product.price * 1,2) }
        })
        check (productsList instanceof Array, true)
        check(productsList.length, 4)
        check (productsList[0].price, 20)
        check (productsList[1].price, 10)
        check (productsList[2].price, 30)
        check (productsList[3].price, 40)

        check(newProductsList.length,4)
        check(newProductsList[1].price,24)
        check(newProductsList[2].price,12)
        check(newProductsList[3].price,36)
        check(newProductsList[0].price,48)  
    })
    test('map people to strings', function() {
        const person = [
            {name:'Peter', surname:'Pan', age:15},
            {name:'James', surname:'Hook', age:40},
            {name:'Pepito', surname:'Grillo', age:50},
            {name:'Wendy', surname:'Pan', age:14},
            {name:'Pin', surname:'Ocho', age:8}
        ]
        
        const toStrings = function(person){
            return person.name + ' '+ person.surname + '('+ person.age + ')'
      
        const strings = people.map (toString)
        })
        check(strings.length, people.length)
        check(strings[0], 'Peter Pan (15)')
        check(strings[1], 'James Hook (40)')
        check(strings[2], 'Pepito Grillo (50)')
        check(strings[3], 'Wendy Pan (14)')
        check(strings[4], 'Pin Ocho (8)')
    })
})