function join(array, separator) {
    // TODO ...
    let newText = ""
    if(separator === undefined)
        separator = ","
    for(let i = 0; i < array.length; i++){
        if(i === array.length -1){
            newText = newText + array[i]
        }else
        newText = newText + array[i] + separator

    }
    return newText
}
