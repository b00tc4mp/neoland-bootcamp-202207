//crea un nuevo array con los resultados de una function

function map(array, callback) {
    let result = [0]
    for(let i = 0; i < array.length;i++){
            result[i] = callback(array[i])     
        }
         return result

    }

    function callback() {
        var result = 1;
        for (var i = 0; i < 5; i++) {
          result = result * 2;
        }
        return result;
      }

console.log (map[1,5,10,15])

/// SIGO SIN ENTENDER QUE HACE, LEER MÁS Y CONTINUAR

// var numbers = [1, 5, 10, 15];
// var doubles = numbers.map(function(x) {
//    return x * 2;
// });
// // doubles is now [2, 10, 20, 30]
// // numbers is still [1, 5, 10, 15]

// var numbers = [1, 4, 9];
// var roots = numbers.map(function(num) {
//     return Math.sqrt(num);
// });
// // roots is now [1, 2, 3]
// // numbers is still [1, 4, 9]