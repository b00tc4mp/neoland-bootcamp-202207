function findIndex(array, callback){
    try{
        if(arguments.length < 2)
            throw new Error('Arguments are not enough(2required)')
        else if(arguments.length > 2)
            throw new Error('Arguments exceeded')
        
        if(!(arguments[0] instanceof Array))
            throw new TypeError('First argument must be an ARRAY')
        if(!(arguments[1] instanceof Function))
            throw new TypeError('Second argument must be a Function')
    }catch(error){
        return error.message
    }
    
    for(let i = 0; i < array.length ; i++){
        if(callback(array[i])){
            return i
        }
    }
    return -1
}