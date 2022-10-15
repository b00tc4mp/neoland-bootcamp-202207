Cachay.prototype.join = function (values,separator){
    var result = ''
    if (!separator)
        separator = ','
    for (var i=0; i < values.length; i++){
        var element = values[i]
        result = result + element
        if (i < values.length - 1)
            result = result + separator
    }

    return result
}