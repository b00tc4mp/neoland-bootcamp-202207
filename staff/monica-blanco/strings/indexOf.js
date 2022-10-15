//devuelve la posición de la primera aparición de un valor en una cadena.
//devuelve -1 si no se encuentra el valor.
//distingue entre mayúsculas y minúsculas.

function indexOf(string, searchString) {

  for (let i = 0; i < string.length; i++) {
    if (string[i] === searchString[0]) {
      let found = true
      for (let j = 1 ; j < searchString.length; j++) {
        if (string[i + j] !== searchString[j]){
          found = false
        }
      }
      if (found){
        return i
      }  
    }
  }
  return -1
}

//console.log(indexOf('hello world', 'a'))
// -1
//console.log(indexOf('hello world', 'o'))
// // 4
//console.log(indexOf('Hello world, welcome to the universe', 'welcome'))
// 13
