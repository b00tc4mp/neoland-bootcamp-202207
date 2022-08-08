describe('TESTING map in arrays',function(){
    test('Multiply all elements in array * 2', function(){
        result = map((x) => x * 2, arrayOfNumbers)
        
        check(result[0],2)
        check(result[1],4)
        check(result[2],10)
        check(result[3],14)
        check(result[4],130)
    })

    test('Join name and surname from an array',function(){
        array1= ['Luis Garrido']
        array2= ['Helena Tendero']
        array3= ['Julia Otero']
        const result = map((x) => [x.nombre,x.apellido].join(" "), personas)
        
        check(result[0],array1[0])
        check(result[1],array2[0])
        check(result[2],array3[0])
    })
})
