function every(element, array) {
    let result = ''
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element)
            return result = true
        else result = false
    }
    return result
}
