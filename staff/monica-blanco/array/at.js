// posicion del elemento dentro del array
//si es negativo el elemento devuelto se encuentra contando de de atrás a adelante

function at(array, pos) {

    if (pos > 0 && pos < array.length) {
        return array[pos]
    }
    else if (pos < 0 && -pos<array.length ){
        return array[array.length + pos]
    }
}
console.log(at([2, 7, 9, 5], 2))
