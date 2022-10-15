// function splice (start,deleteCount, array, item1){
//     let myStart = start
//     let position = deleteCount
//     const result = []
//     for (let i = myStart; i < position; i++){
//         const element = array [i]

//         mySplice[splice.length]= item1
//     }
//     return result
// }

Cachay.prototype.splice = function (array, start, deleteCount, item1){
    const result = []

    for (let i = start; i< start+deleteCount;i++){
        result.push (array[i])
    }
    for(let i= array.length ; i> start; i--){
        array [i] = array[i-1]
    }
    array[start]= item1 

    return result
}

