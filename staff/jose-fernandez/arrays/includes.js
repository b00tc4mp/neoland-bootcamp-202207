function includes(array, element) {
    let result = ''
    for (let i = 0; i < array.length; i++) {
        if (array[i] == element) {
            result = true
            break;
        }
        else {
            result = false
        }
    }
    return result
}

// var arrayOfNumbers = [0, 1, 2, 3]
// console.log(includes("arrayOfNumbers", 5))