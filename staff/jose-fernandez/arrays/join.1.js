function join(array, separator) {
    /*
    - new variable (empty string)
    - for loop iterates all elements in array
    - for each element, add element and separator
    */

    var result = ''
    
    if (!separator)
        separator = ','

    for (var i = 0; i < array.length; i++) {
        var element = array[i]

        // result = result + element
        result += element

        if (i < array.length - 1)
            result += separator
    }

    return result
}

// tests

console.log('TEST join')

console.log(join(['Fire', 'Air', 'Water'], ' '))
// Fire Air Water

console.log(join(['Fire', 'Air', 'Water'], ''))
// FireAirWater

console.log(join(['Fire', 'Air', 'Water'], '-'))
// Fire-Air-Water

console.log(join(['Fire', 'Air', 'Water']))
// Fire,Air,Water