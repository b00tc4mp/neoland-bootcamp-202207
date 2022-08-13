function reverse(array){
    // Con push

    // for(let i=array.length-1;i>=0;i--){
    //     reverse.push(array[i])
    // }
    // return reverse
    
    // Sin metodos

    const limit= Math.floor(array.length/2)
    for(i=0;i<limit;i++){
        let temp=array[i]
        let rearIndex= array.length-1-i
        array[i]=array[rearIndex]
        array[rearIndex]=temp
    }
    return array
}

let array1 = ['one', 'two', 'three'];
console.log(reverse(array1));