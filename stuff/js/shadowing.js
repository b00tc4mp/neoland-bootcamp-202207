// #1

var a = 1

var b = function() {
    console.log(a)
}

b()

console.log(a)


// #2

var a = 1

var b = function() {
    a = 2
    
    console.log(a)
}

b()

console.log(a)

// #3

var a = 1

var b = function() {
    var a = 2 // shadowing
    
    console.log(a)
}

b()

console.log(a)
