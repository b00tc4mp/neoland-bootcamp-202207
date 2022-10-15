//includes() determina si una cadena de texto puede ser encontrada dentro de otra cadena de texto, 
//devolviendo true o false según corresponda.

function includes(string, searchString) {
    let counter = 0
    for (let i = 0; i < string.length; i++) {
        if (searchString[0] === string[i]) {
            for (let j = 0; j < searchString.length; j++) {
                if (searchString[j] === string[i]) {
                    counter = counter + 1
                    i++
                }
                if (counter === searchString.length) {
                    return true;
                }
            }
        return false;
        }
    }
}

console.log (includes('the cat is under the table','cat')) 
// true    
//console.log (includes('the cat is under the table','dog')) 
//false