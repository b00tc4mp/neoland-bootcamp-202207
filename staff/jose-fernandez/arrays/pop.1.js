function pop(array){
    //guarda el ultimo elemento
    if(array.length>0)
    {
    const elementRemove= array[array.length-1]

    //elimina el ultimo elemento
        // array.length= array.length-1
        //array.length += 1
        array.length--
        return elementRemove    
    }
    
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