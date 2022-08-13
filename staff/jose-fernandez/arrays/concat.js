function concat(array, array2) {
    let result = []
    for (let i = 0; i < arguments.length; i++) {
        let argument = arguments[i]
        for (let j = 0; j < argument.length; j++) {
            let element = argument[j]
            //en vez de result.push(element)
            result[result.length]=element
        }
    }
    return result
}
