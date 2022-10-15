// devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada

function find(array,callback){
    for (let i=0; i< array.length; i++){
        let element = array[i]

        const meetsCondition = callback(element)
        if (meetsCondition){
            return element
        }
        
    }
    return undefined 
}

//let array = [1, 2, 5, 11, 15, 2, 130]
// let element = 10
console.log (find([1, 2, 5, 11, 15, 2, 130],10))
