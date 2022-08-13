describe('toString',()=>{
    test('test 1 with array of number ',()=>{
        
    const array1 = [1,2,3,4,5,6,7]

    const result=toString(array1)

    // const result=(array1.toString())
    check(result,"1,2,3,4,5,6,7")
    })

    test('test 2 with array of string ',()=>{
        
        const array1 = ['1','2','3','4','5','6']
    
        const result=toString(array1)
    
        // const result=(array1.toString())
        check(result,"1,2,3,4,5,6")
        })
})

// const array1 = [1, 2, 'a', '1a'];

// console.log(array1.toString());
// // expected output: "1,2,a,1a"
