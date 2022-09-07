var arr = [10, 20, 30]
var noArr = { 
    0: 10, 
    1: 20, 
    2: 30, 
    length: 3 
}

arr
// (3) [10, 20, 30]
// length: 3[[Prototype]]: Array(0)
noArr
// {0: 10, 1: 20, 2: 30, length: 3}0: 101: 202: 30length: 3[[Prototype]]: Object

arr.forEach(element => console.log(element))
// VM10447:1 10
// VM10447:1 20
// VM10447:1 30
// undefined

Array.prototype.forEach.call(noArr, element => console.log(element))
// VM10651:1 10
// VM10651:1 20
// VM10651:1 30