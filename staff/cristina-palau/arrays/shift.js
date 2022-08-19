function shift(array) {
    const firstElement = array[0]
    
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i + 1];
    }
    
    array.length--
    return firstElement
}


const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(shift(fruits))

console.log(fruits)

