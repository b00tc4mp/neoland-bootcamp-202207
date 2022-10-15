//devuelve la posición de la primera aparición de un valor en una cadena.
//devuelve -1 si no se encuentra el valor.
//distingue entre mayúsculas y minúsculas.

// function indexOf(array, value) {
//     // TODO
// }


function indexOf(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value)
            return i
    }
    
    return -1
}

var array = [2, 9, 9];
console.log(indexOf(array, 2));
// 0
console.log(indexOf(array, 7));
  // -1
const array1 = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(indexOf(array1,'bison'));
  // expected output: 1
   
console.log(indexOf(array1,'giraffe'));
  // expected output: -1


