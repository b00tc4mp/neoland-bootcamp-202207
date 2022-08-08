describe('TESTING indexOf in arrays', function(){
    test('Return indexOf of a word that exist in array', function(){
        check(indexOf(['dog', 'cat', 'elephant', 'monkey'], 'monkey'), 3)
    })
    test('Return indexOf of a word that does NOT exist in array', function(){
        check(indexOf(['hello', 'world', 'bye', 'mars'], 'hello'), 0)
    })
})