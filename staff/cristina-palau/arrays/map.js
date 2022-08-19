function map(array, callback) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        
        newArray[i] = callback(array[i]) 
    }
   return newArray
}



// const array = [1, 2, 5, 7, 65]
// console.log(map(array, function (x) { x * 2})

// const  array2 = [1, 2, 5, 7, 65]
// console.log(map(array, function (x) { x / 2}

// const array3 = [1, 2, 5, 7, 65]
// console.log(map(array, function (x) { x / 2}



/* console.log(map((x) => x * 2, arrayOfNumbers));
// expected output: [2, 4, 10, 14, 130]

console.log(map((x) => [x.nombre,x.apellido].join(" "), personas));
// expected output: ['Luis Garrido', 'Helena Tendero', 'Julia Otero'] */