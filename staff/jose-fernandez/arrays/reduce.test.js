describe('reduce',()=>{
    test('test 1 suma',()=>{
        const array1 = [1, 2, 3, 4];
        // const sumWithInitial = array1.reduce(function
        //     (previousValue, currentValue,indice,array1) {
        //     console.log({previousValue ,currentValue,indice, array1})
        //     return previousValue * currentValue
        const valInit=0
        function operation(previousValue,currentValue){
            let result = previousValue+currentValue

            return result
        }
        // const result= reduce(array1,sumWithInitial{
        const result= reduce(array1,operation)
        check(result, 10)
        check(typeof result, "number")

    })
})


// // 0 + 1 + 2 + 3 + 4
// // const initialValue = 1;
//     // , initialValue
  
// });
// console.log("=============================");

// console.log(sumWithInitial);
// // expected output: 10
