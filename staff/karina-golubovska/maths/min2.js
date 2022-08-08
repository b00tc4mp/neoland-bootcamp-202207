function min() {

    minimum[0] = arguments[0]
    {
        for (var i = 0; i < arguments.length; i++)
            if (arguments[i] < minimum[0]) minimum[0] = arguments[i];
    }
    return minimum
}
const minimum = []


console.log(min(1, 2, 3, 0, 4, 5))


