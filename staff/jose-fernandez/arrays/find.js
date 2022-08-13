function find(array,callback){
    for(i=0;i<array.length;i++){
        if(callback(array[i])) 
        return array[i]

    }
    return undefined
}

const array1 = [5, 12, 8, 130, 44];

console.log(find(array1,10));
// expected output: 12
