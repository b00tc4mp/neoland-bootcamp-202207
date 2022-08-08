// Version minificada

function max() {
    let result = arguments[0]
    
    for (let i = 1; i < arguments.length; i++) {
        const element = arguments[i]

        if (element > result)
            result = element
    }

    return result
}

/* function max(a, b) {
    // TODO ...
    var maxValue;

    for(let i = 0; i < arguments.length; i++){
        for(let j = i+1; j < arguments.length; j++){
            if(arguments[i] > arguments[j]){
                maxValue = arguments[i]
                arguments[j] = arguments[i]
            }else{
                maxValue = arguments[j]
                arguments[i] = arguments[j]
            }
        }
        
    }
    return maxValue

} */



// demos

console.log(max(4, 1))
// 4

console.log(max(123, 456))
// 456

console.log(max(9000, 7000, 9, 5000, 4, 2000))
// 9000