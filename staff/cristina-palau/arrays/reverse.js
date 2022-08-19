function reverse(array) {
    const limit = Math.floor(array.length / 2)
    for (let i = 0; i < limit; i++) {
        const temp = array[i]
        const rearIndex = array.length - 1 - i
        array[i] = array[rearIndex]
        array[rearIndex] = temp
    }

    return array
}
