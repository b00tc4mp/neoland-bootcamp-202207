// invierte el orden de los elementos de un array

Cachay.prototype.reverse = function (values){
// const limit = Math.floor (array.length/2)
// for (let i=0; i<limit; i++) optimización
    for (let i = 0; i< values.length/2; i++){
        let temp = [i]
        const index = values.length -1 -i

        values[i]= values[index]
        values[index] = temp
    }
    return values
}

//console.log (reverse([1,2,3,4,5,6,7]))