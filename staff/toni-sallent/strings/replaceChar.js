function replaceChar(string, oldValue, newValue){
    var newString = ''
    for(i = 0; i < string.length; i++){
        
        if(string[i] === oldValue){
            newString += newValue
        }else if(string[i] !== oldValue){
            newString += string[i]
        }
        
    
    }
     return newString
}

console.log(replaceChar('hola mundo', 'o', 'U'))