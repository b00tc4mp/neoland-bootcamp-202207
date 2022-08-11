function slice(array, start) {
    const result = []

    if ( start < 0)
    start = array.lengh + start

    if (end ===  undefined)
       end = array.length

    for (let i = start; i < array.length; i++) {
        const element = array[i]

        result[result.length] = element
    }

    return result

}