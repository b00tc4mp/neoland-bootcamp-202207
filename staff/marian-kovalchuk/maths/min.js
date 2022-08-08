function min() {
    minimum[0] = arguments[0]
{for (i = 0; i < arguments.length; i++)
    if (arguments[i] < minimum[0]) minimum[0] = arguments[i]
    
} return minimum
}
//tests
const minimum = []

console.log(min(4, 1, 0, 2))
//1

console.log(min(111, 222, 124, 456, 67))

