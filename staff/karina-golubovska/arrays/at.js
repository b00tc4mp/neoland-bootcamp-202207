function at(array, position) {
    result =''
    for ( let i = 0 ; i < at.length; i++){
         array[i] = position [0] 
        if (array [i] > position[1])
        return (array [2]) 
        else (array [i] < position[1]) 
        return (array [0]) 
        
    }
    return result
}

console.log(at(['cat', 'dog', 'elephant'], 2))
// expected output 'elephant'

console.log(at(['Adiós', 1, 'Mundo'], 0))
// expected output 'Adiós'