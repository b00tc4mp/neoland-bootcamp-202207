function pop(array){
    //guarda el ultimo elemento
    if(array.length>0)
    {
    const elementRemove= array[array.length-1]

    //elimina el ultimo elemento
        // array.length= array.length-1
        //array.length += 1
        array.length--
        return elementRemove    
    }
    
}