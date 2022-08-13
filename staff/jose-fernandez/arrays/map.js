function map(array, callback){
    let result=[]
    for(i=0;i<array.length;i++){

         result[i]=callback(array[i]);
        // console.log()
        //result.push(callback(array[i]))
        
    }
    return result
}




