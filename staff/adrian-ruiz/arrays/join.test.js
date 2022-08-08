describe('TESTING Join', function(){
    test('One array with space separator', function(){

        check(join(['Fire', 'Air', 'Water'],' '),'Fire Air Water')
    })

    test('One array with NO SPACE separator', function(){

        check(join(['Fire', 'Air', 'Water'],''),'FireAirWater')
        
    })
    test('One array with - separator', function(){

        check(join(['Fire', 'Air', 'Water'],'-'),'Fire-Air-Water')

    })
    test('One array with UNDEFINED separator', function(){

        check(join(['Fire', 'Air', 'Water']),'Fire,Air,Water')
        
    })
})