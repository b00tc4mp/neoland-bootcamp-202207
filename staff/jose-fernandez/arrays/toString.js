function toString(array){
    let result=array[0]
    for(let i = 0;i<array.length-1;i++)
    result=result+','+ array[i+1]

    return result
}

// let array= ['1','2','3','4','5','6']
// let array2= [1,2,3,4,5,6]
// console.log(toString(array))
// console.log(toString(array2))