function splice(array, start, removeCount, ...elements) {
    if (start < 0)
        start = array.length + start

    if (removeCount === undefined)
        removeCount = array.length

    if (removeCount === 0) {
        const removed = []

        const from = array.length + elements.length - 1

        for (let i = from; i >= start; i--) {
            const element = array[i - elements.length]

            array[i] = element
        }

        for (let i = 0; i < elements.length; i++)
            array[start + i] = elements[i]

        return removed
    } else if (removeCount > 0) {
        const removed = []

        removeCount = start + removeCount > array.length ? array.length - start : removeCount

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