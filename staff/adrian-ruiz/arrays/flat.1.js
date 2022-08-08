function flat(array, depth){
let newArray = []
    if (depth === undefined){   // Defino el comportamiento cuando solo pasemos el array
       
        for(let i = 0; i < array.length; i++){

            if(array[i].length){    // En caso de que solo haya 1 elemento el length no existirá
                let x = i
                for(let j=0; j < array[i].length; j++){ // Bucle para recorrer el elemento con "length", osea, otro array
                
                newArray[x] = array[i][j]
                x++                 // Esto es para controlar la posición donde ponemos el elemento en el array
            }
            
            }else{                  // Si el length no existe directamente devolvemos el elemento
                newArray[i] = array[i]
            }
        }
    } else{
        for(let i = 0; i < array.length; i++){
            if(array[i].length){    //Recorre los arrays del array en caso de que el length exista
                let x = i           // Para controlar a que elemento pusheamos
                for(let j = 0; j< array[i].length;j++){
                    if(array[i][j].length){ // Comprobamos que el array del array tenga length
                        let y = x
                        for(let z = 0; z< array[i][j].length;z++){  //Para recorrer el tercer array
                            newArray[y] = array[i][j][z]
                            y++
                        }
                    }else{
                        newArray[x] = array[i][j]
                        x++
                    }
                    
            }
            }else{
                newArray[i] = array[i]
            }
            
        }
    }
    return newArray
}

array1= [1,2,[3,4]]
array2= [1,2,5,7,[3,4,7,9,10,[5,6,3,20,40]]]
console.log(flat(array1))
console.log(flat(array2,2))