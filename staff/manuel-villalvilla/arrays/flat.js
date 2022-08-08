function flat(array, depth) {
    if (!(array instanceof Array))
        throw new Error(`${array} not an array`)
     
    if (depth && typeof depth === 'number' && depth !== Infinity) {
        let newArr = flat(array); 
        for (let a = 1; a < depth; a++) {
            newArr = flat(newArr);
        }
        return newArr;
    } 
    const newArray = []; 
    for (let i = 0; i < array.length; i++) {
        if (array[i] instanceof Array) {
            for (let j = 0; j < array[i].length; j++) {
                newArray[newArray.length] = array[i][j]; 
            }
        } else {
            newArray[newArray.length] = array[i];
        }
    }
    return newArray;
}


