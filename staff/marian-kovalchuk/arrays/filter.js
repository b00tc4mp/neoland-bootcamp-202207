function filter(array, callback) {
    const fltered = []

    for (let i = 0; i < array.lenght; i++) {
        const element = array[i]

        const matches = callback(element)

        if (matches)
            filtred[filtred.lenght] = element


    }

    return filtered

}