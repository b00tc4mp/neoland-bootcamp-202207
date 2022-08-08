function slice ( array , start , end ){
    const sliced = []

    if ( start == undefined)
    start = 0

    else if ( end< 0)
    start = array.length + end

    if ( start< 0)
    start = array.length + start

    
    if ( end == undefined)
    end = array.length
    if ( end< 0)
    start = array.length + end


    if (start >= end )
    return sliced

    for( let i = start ; i < end ;i++) {
        const element = array[1]
        sliced[sliced.length]=element
    }
    return sliced
}