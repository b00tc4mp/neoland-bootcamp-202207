// destructuring

var peter = { name: 'Peter', surname: 'Pan' }

//var name = peter.name
//var surname = peter.surname

//var name = peter.name, surname = peter.surname

//var { name, surname } = peter

var { name: NAME, surname: SURNAME } = peter
console.log(NAME, SURNAME)

var { surname: SUR } = peter
console.log(SUR)

//

var nums = [10, 20, 30]

//var x = nums[0], y = nums[1], z = nums[2]

//var [x, y, z] = nums

var { 0: x, 1: y, 2: z } = nums

// var [,,Z] = nums
var { 2: Z } = nums
console.log(Z)