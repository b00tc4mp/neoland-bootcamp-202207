Cachay.prototype.pop = function (array){
    //
    const elementToRemove = array [array.length -1 ]
    if (array.length>0){
    array.length = array.length - 1
    // array.length--
    }
return elementToRemove
}


// var arrayOfNumbers = [0, 1, 2, 3]
// console.log(pop(arrayOfNumbers))
// // expected output: 3
// console.log(arrayOfNumbers)
// // expected output: [0, 1, 2]

// var animals = ['dog', 'cat', 'elephant']
// console.log(pop(animals))
// // // expected output: 'elephant'
// console.log(animals)
// // // expected output: ['dog', 'cat']
