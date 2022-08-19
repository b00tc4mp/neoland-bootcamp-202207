describe('indexOffunction', function () {
test ('animals', function(){
    check(indexOf(['dog', 'cat', 'elephant', 'monkey'], 'monkey'), 3)
})
test ('randomWords', function(){
    check(indexOf(['hello', 'world', 'bye', 'mars'], 'hello'), 0)
})
})
