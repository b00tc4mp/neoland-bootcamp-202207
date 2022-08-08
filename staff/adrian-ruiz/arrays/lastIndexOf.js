var fruits = ["Orange", "Apple", "Mango", "Apple", "Banana", "Apple"];

function lastIndexOf(word, indexStart, array){
    let l = arguments.length
    let indexOf
    if(l === 2){
        for(let i = arguments[1].length ; i > 0 ; i--){
            if(arguments[1][i-1] === word)
            return i-1
        }  
    }else if( l === 3){
        for(let i = indexStart; i > 0; i--){
            return i-1
        }
    } 
    return -1
}