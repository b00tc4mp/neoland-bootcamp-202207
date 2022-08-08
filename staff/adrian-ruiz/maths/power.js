function power(value, pow){
    // TODO implement me

    // result = Math.pow(val,pow);
    
    let resultado = 1
    for ( let i = 0; i < pow; i++){
        resultado = resultado * value
    }
    return resultado;
}



// demo

console.log(power(10,3))
// 1000

console.log(power(3,4))
// 81

console.log(power(2, 3))
// 8 