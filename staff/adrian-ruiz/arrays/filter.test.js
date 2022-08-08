describe('TESTING filter array',function(){
    test('Filter an number array',function(){

        const arrayOfNumbers = [10, 28, 17, 14, 25, 64, 15, 13, 19];

        arrayResult = (filter(function(age){return age >= 18;}, arrayOfNumbers))
        
        check(arrayResult[0],28)
        check(arrayResult[1],25)
        check(arrayResult[2],64)
        check(arrayResult[3],19)
    })

    test('Filter by surname in array of Objects', function(){

        const people = [
            {name: 'Adrian', surname: 'Ruiz' },
            {name: 'Pepe', surname: 'Rodriguez'},
            {name: 'Jose', surname: 'Sanchez'},
            {name: 'Juan', surname: 'Ruiz'}
        ]
        
        arrayResult = (filter(function(person){return person.surname === 'Ruiz'}, people))

        check(arrayResult[0],people[0])
        check(arrayResult[1],people[3])
    })
})