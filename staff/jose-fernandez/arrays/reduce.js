function reduce(array,callback){
    result=''
    
    for(let i=0;i<array.length;i++){
        result=callback(array[i])

        
    }
    return result
}

// const array1 = [1, 2, 3, 4];
// const result= reduce(array1)