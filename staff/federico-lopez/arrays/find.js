function find(array, callback) {
    debugger
    for (let i = 0; i < array.length; i++) {
        let element = array[i]
        
        const meetsCondition = callback(element)

        if(meetsCondition) {
            return element
        }
 
        // if(callback(array[i])) return array[i]
    }
    // return undefined
}