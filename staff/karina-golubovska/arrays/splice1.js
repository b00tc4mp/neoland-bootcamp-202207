function splice(array, start , deleteCount , item1) {
    const result = []


     for ( let i = array.length; i > start; i--){
        array[i]= array[i - 1]
}

    array[start]  = item1

    return result
}

function splice(array, start , deleteCount , item1) {
    const result = []

    for ( let i = start; i < (start + deleteCount); i++){
        result.push(array[i])
        }

     for ( let i = array.length; i > start; i--){
        array[i]= array[i - 1]
}

    array[start]  = item1

    return result
}

