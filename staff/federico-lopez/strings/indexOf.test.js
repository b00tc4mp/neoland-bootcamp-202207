describe('indexOf', function(){
    const artist = 'Rosalía'

    test('on existing character', function(){
        check(indexOf(artist, 'o'), 1)
    })

    test('on unexisting character', function(){
        check(indexOf(artist, 'x'), -1)
    })

    test('on repeated character', function(){
        check(indexOf(artist, 'a'), 3)
    })
})