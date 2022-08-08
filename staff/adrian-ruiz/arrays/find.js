function find(array, callback){
    try{
        if(!(arguments[0] instanceof Array))
            throw new TypeError(array + ' is not an Array')
        if(!(arguments[1] instanceof Function))
            throw new TypeError(callback+' is not a Function')
    }catch(error){
        return error.message
    }
    for(let i = 0; i < array.length; i++){
        if(callback(array[i])){
            return array[i]
        }
    }
}