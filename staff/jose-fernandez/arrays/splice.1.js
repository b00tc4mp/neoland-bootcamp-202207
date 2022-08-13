function splice(array,start,reIndexs,inputs){
    const result=[]
    
    for(let i=array.length;i>start;i--){
        array[i]=array[i-1]        
    }
    for(let i =start;i<(start+reIndexs);i++){
        result[result.length]= array[i]
    }
    array.length= array.length -reIndexs
    array[start]=inputs
    return result
}

const months = ['Jan', 'Mar', 'Apr', 'May']

console.log(splice())