function concat(){
    let result = ''

    for(i = 0; i < arguments.length; i++){
        const element = arguments[i]

        result += element

    }
    return result
}
console.log(concat('Adiós', 'mundo', 'cruel'))