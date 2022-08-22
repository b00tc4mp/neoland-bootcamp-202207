function reverse(array) {
    const limit = Math.floor(array.length / 2)
    
    for (let i = 0; i < limit; i++) {
        const temp = array[i]

        const rearIndex = array.length - 1 - i
        
        array[i] = array[rearIndex]

        array[rearIndex] = temp        
    }

    return array
}







/*function reverse(array){
   // let array1=[1,2,3,4,5,6]
   
    
for(let i =0; i<array.length/2; i++){
   const temp= array[i]
  const rearindex = array.length -1 -i
  array[i] = array.rearindex
  array[rearindex]=temp
   
}
return temp
   
    //array1[array1.length]=array[i]

   // result = array1.length
   

}*/