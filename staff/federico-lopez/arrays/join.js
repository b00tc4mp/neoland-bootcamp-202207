function join(array, separator = ',') {
    let result = ''

    for (let i = 0; i < array.length; i++) {
        const element = array[i]

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