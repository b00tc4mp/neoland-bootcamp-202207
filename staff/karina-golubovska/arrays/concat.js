function concat( array , array2) {
var result = []
for ( var i = 0 ; i < arguments.length ; i++ )
{ var argument = arguments [i]
for ( var j = 0 ; j < argument.length ; j++ ) {
var element = argument [j]
result [result.length] = element
}
}
return result
}
