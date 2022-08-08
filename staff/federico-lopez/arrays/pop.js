function pop(array) {
    const elementToRemove = array[array.length - 1]

    // array.length = array.length - 1
    // array.length -= 1
    if (array.length > 0) {
        array.length--
    }

    return elementToRemove
}