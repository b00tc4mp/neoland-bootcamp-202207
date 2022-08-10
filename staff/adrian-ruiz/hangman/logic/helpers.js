// THESE LOGICS ARE NOT NEEDED IF WE USE FEDE CODE

function getIndexes(string, char){
    let result = []
    for(let i = 0; i < string.length; i++){
        if(string[i] === char)
            result.push(i)
    }
    return result
}

function replaceIndexes(string, char, indexes){
    let result = ''
    let startFrom = 0
    for(let i = 0; i < indexes.length; i++){
        for(let j = startFrom; j < string.length; j++){
            if( j === indexes[i]){
                result += char
                startFrom = j+1
                break
            }
            else result += string[j]
        }
    }
    for(let i = startFrom; i < string.length; i++){
        result += string[i]
    }
    return result
}