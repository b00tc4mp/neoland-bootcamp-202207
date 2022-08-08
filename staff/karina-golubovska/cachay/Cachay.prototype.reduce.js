Cachay.prototype.reduce = function (callback , initialValue){
    let accumulator = initialValue 
    for (let i = 0 ; i <this.length; i++){
        const element = this[i]
        accumulator = callback(accumulator , element )
    }
    return accumulator
}