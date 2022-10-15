function slice(array, start) {
    const sliced = []

    for (let i = start; i < array.length; i++) {
        const element = array[i]

        sliced[sliced.length] = element
    }

    return sliced
}