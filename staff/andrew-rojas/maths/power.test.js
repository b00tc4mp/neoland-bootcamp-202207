function power(value, pow) {
    //todo Implement me

    var result = 1

    for ( var i = 0; i < pow; i++){ 
        // result = result * value

        result = (result * value);

    
    }

    return result;

}

console.log(power(10, 3))


console.log(power(3, 4))


console.log(power(2, 3))