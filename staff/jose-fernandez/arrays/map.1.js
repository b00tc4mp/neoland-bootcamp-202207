function map(array,element){
    let result=[]
    for(i=0;i<array.length;i++){
        result[i]=array[i]*element;    
    }
    return result
}




const array1 = [1, 4, 9, 16];

// // pass a function to map
// const map1 = array1.map(x => x * 2);

console.log(map(array1,2));
// // expected output: Array [2, 8, 18, 32]








