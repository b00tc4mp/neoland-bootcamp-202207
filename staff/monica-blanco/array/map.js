// El método map() crea un nuevo array con los resultados de una callback 

function map(array, callback) {
    let results = []
    for(let i = 0; i < array.length;i++){
        const element = array [i]
        const result = callback(element)
            results[i] = result    
        }
         return results
}

