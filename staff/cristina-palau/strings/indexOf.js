function indexOf(string, searchString) {
    let counter = 0

    for (let i = 0; i < string.length; i++) {

        if (string[i] === searchString[0]) {
            let stringPosition = i
            for (let j = 0; j < searchString.length; j++) {

                if (string[i] === searchString[j]) {
                    counter ++
                    i++
                }

                if (counter === searchString.length){
                return stringPosition
                }
            } 
        }
        counter = 0
    }
    return -1
}

