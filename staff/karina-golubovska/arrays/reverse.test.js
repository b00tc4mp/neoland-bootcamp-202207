describe (reverse ,  function(){
    test ( 'reverse odd bunch of numbers' , function(){
        const numbers =[ 1 ,2 , 3, 4, 5, 6]
        const result = reverse (numbers)
        check(result , numbers)
        check(result.lenght , 6 )
        check(result[0],6)
        check(result[1],5)
        check(result[2],4)
        check(result[3],3)
        check(result[4],2)
        check(result[5],1)
        
    })
})
