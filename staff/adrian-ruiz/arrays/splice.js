function splice(array, start, deleteCount, ...elements){
    
    var newArray = []
    var arrayTemp = []
    if(start > 0 && elements.length === 0 && deleteCount === undefined){
        for(let i = start; i < array.length; i++){
            newArray[newArray.length] = array[i]
        }
        array.length -= newArray.length
        return newArray
    }
    else if(start > 0 && deleteCount === 0 && elements.length > 0){
        let x = start   
        let index = array.length-1 
        array.length += elements.length 
        for(let i = array.length-1; i >= start + elements.length; i--){ 
            array[i] = array[index] 
            index--
        }
        for(let i = 0; i < elements.length; i++){
            array[x] = elements[i]
            x++
        }
        return []
    }else if(start > 0 && deleteCount > 0 && elements.length === 0){
        // Copio los elementos a eliminar en el array de return y reduzco el array.length, y a la vez muevo el elemento a mantener
        const limit = start + deleteCount > array.length? array.length : start + deleteCount

        for(let i = start; i < limit ; i++){
            /* if(array[i]){ */
                newArray[newArray.length] = array[i]
                
            /* } */
        }
        for(let i = start; i < array.length; i++){
            array[i] = array[i + deleteCount]
        }
        array.length -= newArray.length
        return newArray
    }else if(deleteCount > 0 && elements.length > 0){
        let x = 0;
        // Almaceno los elementos restantes en un array temporal
        for(let i = start+deleteCount ; i < array.length; i++){
            arrayTemp[x] = array[i]
            x++
        }

        // Copio los elementos a eliminar en el array de return
        x = start
        for(let i = 0; i < deleteCount; i++){
            if(array[x]){
                newArray[i] = array[x]
                x++
            }
        }
        // Recupero los elementos del array a conservar, empezando desde start + elements.length
        x = 0
        var condicion = array.length + elements.length - deleteCount
        for(let i =(start + elements.length) ; i < condicion ; i++){
            if(arrayTemp[x]){
                array[i] = arrayTemp[x]
                x++
            }
            
        }
        // Compruebo si estamos borrando todo el array original
        if(deleteCount >= array.length){
            array.length = 0;
        }
        
        // Introduzco los elementos nuevos (Esto sobreescribirá algunos elementos que queremos mantener)
        x = 0
        for(let i = start; i < elements.length+start; i++){
            array[i] = elements[x]
            x++
        }

        return newArray
    }else if(start < 0 && deleteCount > 0){
        start = array.length + start
        // Introduzco los elementos a eliminar
        for(let i = start; i <start+deleteCount; i++){
            newArray[newArray.length] = array[i]
        }

        // Posiciono los elementos a conservar
        for(let i = start; i < array.length-1; i++){
            array[i] = array[i+1]
        }

        // Elimino la cantidad de elementos del array
        array.length -= newArray.length
    }
    return newArray
}