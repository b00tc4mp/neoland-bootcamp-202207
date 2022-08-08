var arrayOfNumbers = [45, 65, 18, 76, 98, 34];

function every(check, array){

    for(let i = 0; i < array.length ; i++){

        if(!check(array[i])){
            return false
        }
    }

    return true
}

function checkAge1 (age) {
    return age >= 18;
}

function checkAge2 (age) {
    return age >= 20;
}

/* 

FUNCIONA, PERO MAL OPTIMIZADO

function every(check, array){
    
    var isTrue;

    for(let i = 0; i < array.length ; i++){

        if(check(array[i]) === true){
            isTrue = true
        }else return false
    }

    return isTrue
}

*/