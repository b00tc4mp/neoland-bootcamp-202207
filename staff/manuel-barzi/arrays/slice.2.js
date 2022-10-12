function slice(array, start, end) {
    const sliced = []

    if (end == undefined) // == or ===?
        end = array.length

    for (let i = start; i < end; i++) {
        const element = array[i]

        sliced[sliced.length] = element
    }

    return sliced
}