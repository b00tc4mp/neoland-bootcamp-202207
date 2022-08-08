function max() {
    maximum[0] = arguments[0]
{for (i = 0; i < arguments.length; i++)
    if (arguments[i] > maximum[0]) maximum[0] = arguments[i]


} return maximum
}

//tests
const maximum = []

console.log(max(0, 111, 2, 222, 777, 999, 10000))
//10000
