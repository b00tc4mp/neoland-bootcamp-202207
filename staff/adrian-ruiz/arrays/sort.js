function sort(array, compareFunction) {
    if (compareFunction) {    //Compruebo si se ha pasado la funcion de comparar
        for (let i = 0; i < array.length; i++) {
            if (array[i] !== undefined && array[i + 1] !== undefined) { // Compruebo que ninguno sea undefined, para que si "i" es undefined haga la funciónd e comparación
                const compareResult = compareFunction(array[i], array[i + 1])  // Resultado de la comparación

                if (compareResult > 0) { // Si no, guardamos el valor de b y cambiamos posiciones
                    const temp = array[i]
                    array[i] = array[i + 1]
                    array[i + 1] = temp
                    if (i > 0) {       // Comparar si i es mayor a 0 sirve para no empezar el bucle en -1 (0 -2 +1) y que el array[i] exista
                        i = i - 2      // Resto 2 para comprobar array[i+1], con array[i-1] (Valores de referencia antes del cambio de posición)
                    }
                }
            } else if ((array[i] === undefined) && (array[i + 1] !== undefined)) {        // Esto es para cuando i sea undefined, lo muevo de posición siempre que i+1 exista y no sea undefined, ya que si los 2 son undefined se quedan igual y pasariamos al siguiente
                const temp = array[i]
                array[i] = array[i + 1]
                array[i + 1] = temp
                if (i > 0) {
                    i = i - 2
                }

            }

        }
        return array
    } else {
        for (let i = 0; i < array.length - 1; i++) {

            if (("" + array[i]) > ("" + array[i + 1]) && array[i + 1] !== undefined && array[i] !== undefined) {  // && array[i+1] sirve para detectar que la siguiente posición "existe"
                const temp = array[i]
                array[i] = array[i + 1]
                array[i + 1] = temp
                if (i > 0) {
                    i = i - 2
                }

            } else if ((array[i] === undefined) && (array[i + 1] !== undefined)) {
                const temp = array[i]
                array[i] = array[i + 1]
                array[i + 1] = temp
                if (i > 0) {
                    i = i - 2
                }
            }
        }
        return array
    }


}