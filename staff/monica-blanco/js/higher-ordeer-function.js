function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i]

        callback(element)
    }
}


// const a = [1, 2, 3]
// forEach(a)

// debugger
// forEach([1, 2, 3], function(value) { console.log(value * 10) })

// debugger
// forEach(['a', 'b', 'c'], function(value) { console.log(value.toUpperCase()) })

debugger
forEach([[1, 2, 3], ['a', 'b', 'c'], [true, false]], function(array) {
    forEach(array, function(element) {
        console.log('> ' + element)
    })
})