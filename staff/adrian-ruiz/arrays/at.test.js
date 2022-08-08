describe('TESTING at arrays', function(){
    test('Return element from position X from an array',function(){
        check(at(['cat', 'dog', 'elephant'], 2),'elephant')
        check(at(['Adiós', 1, 'Mundo'], 0),'Adiós')
    })
})
