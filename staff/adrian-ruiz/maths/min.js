function min(a, b) {
    // TODO ...
    var minValue;

    for(let i = 0; i < arguments.length; i++){
        for(let j = i+1; j < arguments.length; j++){
            if(arguments[i] < arguments[j]){
                minValue = arguments[i]
                arguments[j] = arguments[i]
            }else{
                minValue = arguments[j]
                arguments[i] = arguments[j]
            }
        }
        
    }
    return minValue

}
// demos

console.log(min(4, 1))
// 1

console.log(min(123, 456))
// 123

console.log(min(1, 2, 3, 0, 4, 5)) // TODO learn about "js arguments"
// 0