function reduce(numbers, initialValue, callback){

    for(let i =0 ; i<numbers.length; i++){

     result  = callback(initialValue, numbers[i])
     initialValue = result
    }

    return result
}

