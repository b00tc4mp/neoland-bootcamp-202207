function findIndex(array,callback){
    for(let i=0;i<array.length;i++){
        
        if(callback(array[i]))
         {
            return i
         }
         
    }
   return -1
}

// const array1 = [5, 12, 8, 130, 44];

// // const isLargeNumber = (element) => element > 13;

// console.log(array1.findIndex(isLargeNumber));
// // expected output: 3
