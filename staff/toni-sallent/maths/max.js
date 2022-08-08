
function testArguments(){
    let result = arguments[0]

    for (let i = 0; i < arguments.length; i++){
        const element = arguments[i]

        if(element > result){

        result = element
    }
    
    }

    return result

}



    console.log(testArguments(1, 2, 3, 0, 4, 5))