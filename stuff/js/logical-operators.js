function getA() {
    const a = true
    
    console.log('a', a)
    
    return a 
}

function getB() {
    const b = true
    
    console.log('b', b)

    return b
}

console.log('result', getA() && getB())
    
// VM2075:4 a true
// VM2075:12 b true
// VM2075:17 result true

// #2

function getA() {
    const a = false
    
    console.log('a', a)
    
    return a 
}

function getB() {
    const b = true
    
    console.log('b', b)

    return b
}

console.log('result', getA() && getB())
    
// VM2152:4 a false
// VM2152:17 result false

// #3

function getA() {
    const a = true
    
    console.log('a', a)
    
    return a 
}

function getB() {
    const b = false
    
    console.log('b', b)

    return b
}

console.log('result', getA() && getB())
    
// VM2211:4 a true
// VM2211:12 b false
// VM2211:17 result false

// #4

function getA() {
    const a = true
    
    console.log('a', a)
    
    return a 
}

function getB() {
    const b = true
    
    console.log('b', b)

    return b
}

console.log('result', getA() || getB())
    
// VM2271:4 a true
// VM2271:17 result true

// #5

function getA() {
    const a = false
    
    console.log('a', a)
    
    return a 
}

function getB() {
    const b = true
    
    console.log('b', b)

    return b
}

console.log('result', getA() || getB())
    
// VM2407:4 a false
// VM2407:12 b true
// VM2407:17 result true

// #6

function getA() {
    const a = false
    
    console.log('a', a)
    
    return a 
}

function getB() {
    const b = false
    
    console.log('b', b)

    return b
}

console.log('result', getA() || getB())
    
// VM2471:4 a false
// VM2471:12 b false
// VM2471:17 result false