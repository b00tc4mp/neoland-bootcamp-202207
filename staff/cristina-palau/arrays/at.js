function at(array) {
   var lastElement = at.arguments[at.arguments.length - 1]
   
   return array[lastElement]

}

console.log(at(['cat', 'dog', 'elephant'], '2'))
// expected output 'elephant'

console.log(at(['Adiós', 1, 'Mundo'], '0'))
// expected output 'Adiós'