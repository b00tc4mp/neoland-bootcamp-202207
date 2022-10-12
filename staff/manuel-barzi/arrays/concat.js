function concat() {
    var result = []

    for (var i = 0; i < arguments.length; i++) {
        var argument = arguments[i]

        for (var j = 0; j < argument.length; j++) {
            var element = argument[j]

            //result.push(element)
            result[result.length] = element
        }
    }
    
    return result
}