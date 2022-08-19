function unshift(array, elements) {
    let newArray = []
    let position = unshift.arguments.length - 1
   
    for (let i = 0; i < array.length; i++) {

        for (let j = 0; j < unshift.arguments.length - 1; j++) {
            newArray[j] = unshift.arguments[j + 1]
        }

        newArray[position] = array[i]
        position++
    }
    array = newArray

    return array

}

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(unshift(fruits, "Lemon", "Pineapple"))