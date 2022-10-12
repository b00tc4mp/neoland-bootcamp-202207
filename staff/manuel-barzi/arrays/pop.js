function pop(array) {
    // if (array.length > 0) {
    if (array.length) {
        const last = array[array.length - 1]

        //array.length = array.length - 1
        // array.length -= 1
        array.length--

        return last
    }
}