function slice(array, start) {
    const result = []


    if (start === undefined)
        start = 0
    else if (start < 0)
        start = array.lengh + start
      

    if (end ===  undefined)
       end = array.length
    else if (end < 0)
       end = array.lengh + end

    if (start >= end)  // early return
       return result

    for (let i = start; i < array.length; i++) {
        const element = array[i]

        result[result.length] = element
    }

    return result

}