function map(array, callback) {
    const results = []

    for (let i = 0; i < array.length; i++) {
        const element = array[i]

        const result = callback(element)

        results[i] = result
    }

    return results
}