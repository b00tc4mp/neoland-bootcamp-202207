describe('reverse',function(){
    test('reverse odd bunch of character',function(){
        let array1 = [1,2,3,4,5,6,7];
        let result=reverse(array1)

        check(result,array1)
        check(result.length,7)
        check(result[0],7)
        check(result[1],6)
        check(result[2],5)
        check(result[3],4)
        check(result[4],3)
        check(result[5],2)
        check(result[6],1)
      
    })

    test('reverse even bunch of character',function(){
        let array1 = ['one', 'two', 'three'];
        let result=reverse(array1)

        check(result,array1)
        check(result.length,3)
        check(result[0],'three')
        check(result[1],'two')
        check(result[2],'one')
      
    })
})