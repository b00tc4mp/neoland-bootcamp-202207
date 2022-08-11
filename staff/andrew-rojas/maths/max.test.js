function max(a, b) {
    // TODO ...
    let result = arguments[0]

    for (let i = 1; i < arguments.length; i++) {
        const element = arguments[i]

        if( element > result)
             result = element
    }

    return result
}

console.log(max(4, 1))


console.log(max(123, 456))


console.log(max(1, 2, 3, 0, 4, 5)) 

// todo learn about " js arguments"


// {
//     // TODO ...
//     var maxv;

//     for (var i = 0; i < arguments.length; i++) {  
//         for ( var j = i+1; j < arguments.length; j++) {
//             if(arguments[i] > arguments[j]) {
//                 maxv = arguments[i]
//                 arguments [j] = arguments[i];
//             } else {
//                 maxv = arguments[j]
//                 arguments[i] = arguments[j]
//             }
//         } 
//     }
//     return max;
// }