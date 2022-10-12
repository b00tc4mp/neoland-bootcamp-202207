function splice(array, start, removeCount, element) {
    /*
    0. ['Jan', 'Mar', 'Apr', 'May']
    1. ['Jan', 'Mar', 'Apr', 'May', 'May']
    2. ['Jan', 'Mar', 'Apr', 'Apr', 'May']
    3. ['Jan', 'Mar', 'Mar', 'Apr', 'May']
    4. ['Jan', 'Feb', 'Mar', 'Apr', 'May']
    */

    for (let i = array.length - 1; i >= start; i--) {
        const elem = array[i]
     
        array[i + 1] = elem
    }

    array[start] = element

    return []
}