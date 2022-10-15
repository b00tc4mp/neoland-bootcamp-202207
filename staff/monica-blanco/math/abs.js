function abs(value) {
    if (value < 0){
        return value*-1
    }else 
        return value
 }

 //otra forma
 //operador ternario
 // function abs(value){ 
    //return value <0? value*-1:value
 //}


// tests
function calcNumbers(result){
    form.displayResult.value=form.displayResult.value+result;
    
 }

console.log(abs(2 - 7))
// 5

console.log(abs(2 * 10 * -9))
// 180

console.log(abs(1.2345 - 9.8765))
// 8.642