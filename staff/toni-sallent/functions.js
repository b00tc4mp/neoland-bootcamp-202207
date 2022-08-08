function doSomething(array, callback){
    for(let i = 0; i < array.length; i++){
        const element = array[i]

        callback(element)
    }
}





doSomething([1, 2, 3], function(value)){
    console.log(value * 10)

}

function  forEach(array, callback){
    for(let i = 0; i < array.length; i++){
        const element = array[i]

        callback(element)
    }
}

forEach([1, 2, 3], function(value)){
    console.log(value * 10)

}