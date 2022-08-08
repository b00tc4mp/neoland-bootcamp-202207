function slice(array, start, end) {
    const result = []

    if (end == undefined)
      end = array.length

    for (let i = start; i < end; i++) {
        const element = array[i]

        result[result.length] = element
    }

    return result

}