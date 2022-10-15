// invierte el orden de los elementos de un array

function reverse (array){
// const limit = Math.floor (array.length/2)
// for (let i=0; i<limit; i++) optimización
    for (let i = 0; i< array.length/2; i++){
        let temp = array[i]
        const index = array.length -1 -i

        array[i]= array[index]
        array[index]=temp
    }
    return array
}

//console.log (reverse([1,2,3,4,5,6,7]))