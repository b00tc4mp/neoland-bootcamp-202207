function splice(array, start, deleteCount, ...elements){
    
    var newArray = []
    
    if(start > 0 && deleteCount <= 0){
        let x = start   // Para controlar los elementos que quiero reemplazar
        let arrayTemp = []
        let z = 0;      // Para controlar que elemento del arrayTemp recupero

        for(let j = 0; j < elements.length; j++){
            arrayTemp[j] = array[x]
            array[x] = elements[j]
            x++
            array.length++
        }

        for(let i = x; i < array.length; i++){
            arrayTemp[z+1] = array[i]
            array[i] = arrayTemp[z]
            z++
        }
    }
    if(deleteCount > 0){
        let x = start
            
            for(let i = 0 ; i < elements.length; i++){
                if(array[x] && deleteCount > i ){
                    newArray[i] = array[x]
                    array[x] = elements[i]
                }else if(array[x]){
                    var temp = array[x]
                    array[x] = elements[i]
                    }else if(elements[i]){
                        array[x] = elements[i]
                        array.length++
                    }
                x++
                }
                for(let j = x; j < array.length; j++){
                    if(j === x){
                        var temp2 = array[x]
                        array[x] = temp
                        temp = array[x+1]
                        array[x+1] = temp2
                        x = x+2
                    }else{
                        if(array[x+1]){
                            temp2 = array[x]
                            array[x] = temp
                            temp = array[x+1]
                            array[x+1] = temp2
                            x++
                        }else{
                            array[x] = temp
                            break
                        }
                    }
                }
                
            
        return newArray
    }
    return newArray
}

const months = ['Jan', 'March', 'April', 'June'];
console.log(splice(months, 1, 0, 'Feb'))


/* splice(1,2,3,'elem1','elem2','elem3','elem4',)
console.log(elements.length)
    console.log(elements[0])
    console.log(elements[1])
    console.log(elements) */