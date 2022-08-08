function max() {
    
    maximum[0] = arguments[0]
    {
        for (var i = 0; i < arguments.length; i++)
            if (arguments[i] > maximum[0]) maximum[0]=arguments[i] ;
    }
    return maximum
}
const maximum = []


console.log(max(1, 2, 3, 0, 4, 5, 10))