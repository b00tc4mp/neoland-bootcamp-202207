describe('find', function(){
    test('arrayFunction', function(){
    let array = [5,12,8,130,44]
    let found = find(array, function(element){
     return element > 10

    })
   check (found, 12)
   check (found, array[1])

    })
})





//console.log(find([5, 12, 8, 130, 44], checkNumber));
// expected output 12