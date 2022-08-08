function reverse(array) {

    for ( let i = 0; i < array.length / 2; i++) {
        const temp = array[i]
        const rearIndex = array.length - 1 - i

        array[i] = array[rearIndex]

        array[rearIndex] = temp
    }

    return array
}
