function splice(array, start, removeCount, element) {
    if (removeCount === 0) {
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
    } else if (removeCount === 1) {
        /*
        0. ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']
        1. removed -> ['clown']
        2. ['angel', 'drum', 'drum', 'mandarin', 'sturgeon']
        3. ['angel', 'drum', 'mandarin', 'mandarin', 'sturgeon']
        4. ['angel', 'drum', 'mandarin', 'sturgeon', 'sturgeon']
        5. ['angel', 'drum', 'mandarin', 'sturgeon']
        */

        const removed = []

        removed[removed.length] = array[start]

        for (let i = start; i < array.length - 1; i++) {
            array[i] = array[i + 1]
        }

        array.length--

        return removed
    }
}