function power(val, pow){
    var result = 1
     for (var i = 0; i<pow; i++) {
        result = (result*val)
    }
return result
}

console.log(power(10, 3))

console.log(power(3, 4))

console.log(power(2, 3))