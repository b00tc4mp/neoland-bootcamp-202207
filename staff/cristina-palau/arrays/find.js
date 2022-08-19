function find(array, callback) {
    for (let i = 0; i < array.length; i++) {
        let element = array[i]
        const meetsCondition = callback(element)

        if (meetsCondition) {
            return element
        }
    }
}