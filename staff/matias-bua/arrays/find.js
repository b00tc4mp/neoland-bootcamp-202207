function find(array, callback){
    let
    for ( let i = 0 ; i<array.length; i++){
        let element = array[i]

        const meetCondition=callback(element)

        if(meetCondition) {
            return element
        }
    }
    return undefined
}