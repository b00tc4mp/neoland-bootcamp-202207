// #1

var a = 1

var b = function() {    
    console.log(a)

    var a // hoisting
}

b()

console.log(a)


// equal to

var a = 1

var b = function() {    
    var a
    
    console.log(a)
}

b()

console.log(a)