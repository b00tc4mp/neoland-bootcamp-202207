function splice(array, start, removeCount, ...elements) {
    if (start < 0)
        start = array.length + start

    if (removeCount === undefined)
        removeCount = array.length

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

        array[start] = elements[0]

        return []
    } else if (removeCount > 0) {
        /*
        0. ['Jan', 'Feb', 'Mar', 'Apr', '1', '2', '3', '4', '5', 'Jul', 'Ago']
        // extract copy of elements to be removed
        1. removed -> ['1']
        2. removed -> ['1', '2']
        3. removed -> ['1', '2', '3']
        4. removed -> ['1', '2', '3', '4']
        5. removed -> ['1', '2', '3', '4', '5']
        // remove elements from array
        ...
        */
        const removed = []

        //const limit = start + removeCount > array.length ? array.length : start + removeCount
        removeCount = start + removeCount > array.length ? array.length - start : removeCount

        //for (let i = start; i < limit; i++)
        for (let i = start; i < start + removeCount; i++)
            removed[removed.length] = array[i]

        const displacementCount = removeCount - elements.length

        const from = elements.length === 0 ? start : start + displacementCount - 1
        const to = elements.length === 0 ? array.length - 1 : array.length - displacementCount

        for (let i = from; i < to; i++)
            array[i] = array[i + displacementCount]

        array.length -= displacementCount

        for (let i = 0; i < elements.length; i++)
            array[start + i] = elements[i]

        return removed
    }
}