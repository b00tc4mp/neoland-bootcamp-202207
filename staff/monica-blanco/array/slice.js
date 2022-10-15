// function slice(array, start) {
//     const sliced = []

//     for (let i = start; i < array.length; i++) {
//         const element = array[i]

//         sliced[sliced.length] = element
//     }

//     return sliced
// }

function slice (array, start, end){
    let myStart = start
    let myEnd = end
    const sliced = []

    if (start === undefined){
        myStart = 0
    } else if (start < 0){
        myStart = array.length + start
    } 
    if (end === undefined){
        myEnd = array.length
    }else if (end < 0){
        myEnd = array.length + end
    }
    //If (start >= end){ // early return para que no sea necesario pasar por el for
    //     return sliced
    // }

    for (let i = myStart; i < myEnd; i++){
        const element = array [i]

        sliced[sliced.length]= element
    }
    return sliced
}