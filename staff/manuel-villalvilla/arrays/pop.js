function pop(array) {
    var x = array[array.length - 1];  
    if (array.length > 0) {
        array.length = array.length - 1; // !! Se puede reducir el tamaño del array reduciendo su length
    }
    return x; 
}

var arrayOfNumbers = [0, 1, 2, 3]

console.log(pop(arrayOfNumbers))
// expected output: 3
console.log(arrayOfNumbers)
// expected output: [0, 1, 2]

var animals = ['dog', 'cat', 'elephant']

console.log(pop(animals))
// expected output: 'elephant'

console.log(animals)
// expected output: ['dog', 'cat']