function includes(string,compare) {
    let result 
    // arreglar, fallo total :v
    for (let i = 0; i < string.length; i++) {
        if (string[i] !=" ") {
            string[i]=compare

            result = true
            break;
        }
        else {
            result = false
        }
    }
    return result
}
console.log(includes("array Of Numbers", 'array'))
console.log(includes("array Of Numbers", 'it'))