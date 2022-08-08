function sort(array, compareFunction) {
    if(!compareFunction) {
        for (let i = 0; i < array.length - 1; i++) {
            let smallestValue, smallestIndex
            
            if (array[i] !== undefined) smallestValue = array[i]
    
            for (let j = 1 + i; j < array.length; j++) {
                if (!smallestValue || array[j] !== undefined && String(array[j]) < String(array[i]) && String(array[j]) < String(smallestValue)) {
                    smallestIndex = j
                    smallestValue = array[j]
                }
            }
    
            if (smallestIndex) {
                for (let k = smallestIndex; k >= i + 1; k--) {
                    array[k] = array[k - 1]
                }
    
                array[i] = smallestValue
            }
        }

        return array
        
    } else {
        for (let i = 0; i < array.length - 1; i++) {
            let smallestValue, smallestIndex
            
            if (array[i] !== undefined) smallestValue = array[i]
    
            for (let j = 1 + i; j < array.length; j++) {
                let condition1

                if (array[i] === undefined) condition1 = 1
                else if (array[j] === undefined) condition1 = -1
                else condition1 = compareFunction(array[i], array[j])
                
                let condition2
                
                if (array[j] === undefined) condition2 = -1 
                else condition2 = compareFunction(smallestValue, array[j])

                if (!smallestValue || array[j] !== undefined && condition1 > 0 && condition2 > 0) {
                    smallestIndex = j
                    smallestValue = array[j]
                }
            }
    
            if (smallestIndex) {
                for (let k = smallestIndex; k >= i + 1; k--) {
                    array[k] = array[k - 1]
                }
    
                array[i] = smallestValue
            }
        }

        return array
    }
}