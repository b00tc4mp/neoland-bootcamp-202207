// determina si todos los elementos del array cumplen una condición
//true si lo consigue y de lo contrario, false

function every(array, element){
    let result = false
    for (let i=0; i < array.length;i++){
        if (array[i] === element){
            result = true
            break;
        }else{
            result = false
        }
    }
    return result
}

console.log(every([1,2,3,4,5], 2))
console.log(every([5,7,3,4,5], 9))
console.log(every([2,3,4,2,1,5,2], 2))