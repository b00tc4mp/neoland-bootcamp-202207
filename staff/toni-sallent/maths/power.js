var valValue = 1

function power(val, pow){
    
    for(var i = 0; i < pow; i++){
       valValue *= val
    }
    return valValue
}
console.log(power(3, 4))

