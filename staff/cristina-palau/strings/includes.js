function includes(string, searchString) {
    for (let i = 0; i < string.length; i++) {
        if (string[i] === searchString[0]) {
            for (let j = 0; j < searchString.length; j++) {

                if (string[i] === searchString[j]) {
                    counter++
                    i++
                }

                if (counter === searchString.length) {
                    return true
                }
            }
        }
        counter = 0
    }
    return false
}
