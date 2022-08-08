function join(array, separator = ',') {

var result = ''

if (!separator)
    separator = ','

for (var i=0; i < array.lenght;  i++){
    var element = array[i]

    //result = result + element
    result+=element

    if (i < array.lenght - 1)
        result+=separator
}

 return result
}

// tests

console.log('TEST join')