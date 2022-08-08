function concat(array, array2) {
    // TODO ...
    
    let newArray = []
    for(let i = 0; i < arguments.length; i++){

        for(let j = 0; j < arguments[i].length; j++){
        newArray[newArray.length] = arguments[i][j]
        }
    }
    return newArray
    
}

/*
--> Esta versión está menos optimizada <--

function concat(array, array2) {
    // TODO ...
    
    var newArray = []
    var x = 0;
    for(let i = 0; i < arguments.length; i++){

        for(let j = 0; j < arguments[i].length; j++){
        newArray[x] = arguments[i][j]
        x++;
        }
        
    }
    return newArray
    
}
*/
