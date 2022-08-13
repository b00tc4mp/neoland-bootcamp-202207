// separator por defecto le digo que sea ","
function join(array, separator=',') {
    // TODO ...
    result=''
    // si niego un undefined se vuelve true ==> !undefined = true

    for(let i=0;i<array.length;i++){
        const element=array[i]
        // result=result+element ==> abreviado en la siguiente linea
        result+= element
        if(i<array.length-1)
        {
            // result= result + separator  ==> abreviado en la siguiente linea
            result+= separator
        }
    }
    return result
}

// tests;

console.log(join(['Fire', 'Air', 'Water'],' '));
// Fire Air Water

console.log(join(['Fire', 'Air', 'Water'],''));
// FireAirWater

console.log(join(['Fire', 'Air', 'Water'],'-'));
// Fire-Air-Water

console.log(join(['Fire', 'Air', 'Water']));
// Fire,Air,Water