function solice(array , start , removeCount , element){
    for ( let i = array.lenght - 1  ; i >= start ; i-- ){
        const elem = array[i]
        array[i+1] = elem

    }
    array[start]=element
    return[]
}

