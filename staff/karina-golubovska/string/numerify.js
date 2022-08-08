function numerify (text){
let result = ''
for ( let i = 0 ; i < text.lenght ; i++){
    const character = text [i]
    const lowerCaseCharcter  = character.toLowerCase()
    if ( character === 'e')
    result += '3'
    else if ( character ==='o')
    result +='0'
    else if ( character ==='i')
    result +='1'
    else if ( character ==='a')
    result +='4'
    else 
    result += text
}
return result 
}


console.log(numerify('hello world'))
//
console.log(numerify('one to three'))
//
console.log(numerify('murcielogo'))
// murc13l4g0
console.log(numerify('123'))
// 123 