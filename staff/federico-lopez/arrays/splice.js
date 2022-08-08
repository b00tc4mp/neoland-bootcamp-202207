// function splice(array, start, deleteCount) {
//     if (start < 0)
//         start += array.length
    
//     const result = []

//     const itemsToAdd = arguments.length - 3
//     const arrayLengthChange = itemsToAdd - deleteCount

//     for (let i = start; i < (start + deleteCount); i++)
//         result.push(array[i])

//     if (arrayLengthChange > 0)
//         for (let i = array.length - 1; i > start - 1; i--)
//             array[i + arrayLengthChange] = array[i]

//     else if (arrayLengthChange < 0) {
//         for (let i = start - arrayLengthChange; i < array.length; i++)
//             array[i + arrayLengthChange] = array[i]

//         array.length += arrayLengthChange
//     }

//     for (let i = 3; i < arguments.length; i++)
//         array[start + i - 3] = arguments[i]

//     return result
// }

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
    } else if (removeCount > 0) {
        /*
        0. ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']
        1. removed -> ['clown']
        2. removed -> ['clown', 'drum']
        3. ['angel', 'mandarin', 'drum', 'mandarin', 'sturgeon']
        4. ['angel', 'mandarin', 'sturgeon', 'mandarin', 'sturgeon']
        5. ['angel', 'mandarin', 'sturgeon']
        */

        const removed = []

        const limit =  start + removeCount > array.length? array.length :  start + removeCount

        for (let i = start; i < limit; i++)
            removed[removed.length] = array[i]

        for (let i = start; i < array.length - 1; i++)
            array[i] = array[i + removeCount]

        //array.length = array.length - removeCount
        array.length -= removed.length

        return removed
    }
}