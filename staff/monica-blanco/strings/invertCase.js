// invertir ASCII también se puede asignar -32 a 'A'que esla diferencia minúscula mayuscula


function invertCase(text) {
    console.log (text.length)
    text[i] = ''
    for(var i=0; i< text.length; i++){
        
        if(text[i]>='a' && text[i]<='z')
        {
            text[i] = text[i] - ('A'-'a') 
        }else if(text[i]>= 'A' && text[i]<='Z')
        {
            text[i] = text[i] + ('a' - 'A')
        }
    }
    return text;
}

// tests

console.log(invertCase('Hello World'))
// hELLO wORLD

console.log(invertCase('a B c D e F'))
// A b C d E f

console.log(invertCase('i lOVe COdInG'))
// I LovE coDiNg