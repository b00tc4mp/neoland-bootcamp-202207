//El método reduce() función reductora sobre cada elemento de un array
//devolviendo como resultado un único valor

function reduce (array){
    let result = 0
    for(let i=0; i< array.length; i++){
        result = result + array[i]
    }
    return result
}

console.log(reduce([2, 7, 9, 2]))
//20

let accumulator = 0
console.log(reduce([1,3,5], function(x){
    console.log("Before accumulator:" + accumulator)
    accumulator += x
    return accumulator
}
))
function reduce (array, callback){
    for (let i = 0; i < array.length - 1;i++){
        callback(element)
    }
    if (array.length > 0)
        return callback(array[array[array.length - 1]])
}


