describe('includes',function(){
    //  const array1 = [1, 2, 3];
    test('arrays with numbers',function(){
        const array=[1,2,3]
        
        check(includes(array, 5),false)
        check(includes(array, 1),true)
        check(includes(array, 2),true)
    })
})