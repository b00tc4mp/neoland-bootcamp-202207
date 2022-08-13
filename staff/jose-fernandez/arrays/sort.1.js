function sort(array) {
    let n = array.length
    // falta regresar la conversion del array ['1','2'] a numeros
    for (let i = 0; i < n; i++) {
        if (array[i] >= 0 || array[i] < 0) {
            array[i] = "" + array[i] + ""
        }
    }

    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {

            if (array[i][0] > array[j][0]) {
                let acum = array[i]
                array[i] = array[j]
                array[j] = acum
            }
        }
    }




    return array
}


let array1 = [1, 30, 4, 21, 100000]
// let array1 = [1, 30, 4, 21, 100000]
// expected output: Array [1, 100000, 21, 30, 4]
const months = ['March', 'Jan', 'Feb', 'Dec'];
// expected output: Array ["Dec", "Feb", "Jan", "March"]

console.log(sort(array1));
console.log(sort(months));