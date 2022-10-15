//cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos
// Cachay.prototype.splice = function (values, start, deleteCount, item1){
//     const result = new Cachay

    

//     for (let i = start; i< start+deleteCount;i++){
//         // result.push(values[i])
//         values[i] = values[i + deleteCount]
//     }
//     for(let i= values.length ; i > start; i--){
//         values [i] = values[i-1]
//     }
//     values[start]= item1 

//     return result
// }

Cachay.prototype.splice = function (values, start, removeCount, ...elements) {
    if (start < 0)
        start = values.length + start

    if (removeCount === undefined)
        removeCount = values.length

    if (removeCount === 0) {
        const result = []

        const from = values.length + elements.length - 1

        for (let i = from; i >= start; i--) {
            const element = values[i - elements.length]

            values[i] = element
        }

        for (let i = 0; i < elements.length; i++)
            values[start + i] = elements[i]

        return result
    } else if (removeCount > 0) {
        const result = []

        removeCount = start + removeCount > values.length ? values.length - start : removeCount

        for (let i = start; i < start + removeCount; i++)
            result[result.length] = values[i]

        const displacementCount = removeCount - elements.length

        const from = elements.length === 0 ? start : start + displacementCount - 1
        const to = elements.length === 0 ? values.length - 1 : values.length - displacementCount

        for (let i = from; i < to; i++)
            values[i] = values[i + displacementCount]

        values.length -= displacementCount

        for (let i = 0; i < elements.length; i++)
            values[start + i] = elements[i]

        return result
    }
}