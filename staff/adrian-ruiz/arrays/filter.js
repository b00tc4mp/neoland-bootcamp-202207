

function filter(check, array){
    let newArray = [];
    let x=0;
    for(let i = 0; i < array.length; i++){
        if(check(array[i])){
            newArray[x] = array[i]
            x++
        }
    }
    return newArray
}