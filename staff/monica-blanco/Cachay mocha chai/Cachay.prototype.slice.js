// recorta un pedazo del array
Cachay.prototype.slice = function (value, start, end){
    let myStart = start
    let myEnd = end
    const sliced = []

    if (start === undefined){
        myStart = 0
    } else if (start < 0){
        myStart = value.length + start
    } 
    if (end === undefined){
        myEnd = value.length

    }else if (end < 0){
        myEnd = value.length + end
    }
    for (let i = myStart; i < myEnd; i++){
        const element = value [i]

        sliced[sliced.length]= element
    }
    return sliced
}