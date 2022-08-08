describe('TESTING slice in arrays', function(){
    test('slice starting from index', function(){

        const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
        const result = slice(animals, 2)

        check(result.length, 3)
        check(result[0],'camel')
        check(result[1],'duck')
        check(result[2],'elephant')

        check(animals === result, false)

        check(animals.length, 5)
        check(animals[0],'ant')
        check(animals[1],'bison')
        check(animals[2],'camel')
        check(animals[3],'duck')
        check(animals[4],'elephant')
    })

    test('slice starting from index and ending at indexes (2 -> 4)', function(){
        // El index en el que acaba no lo devuelve
        const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
        const result = slice(animals,2,4)

        check(result.length, 2)
        check(result[0],'camel')
        check(result[1],'duck')

        check(animals === result, false)

        check(animals.length, 5)
        check(animals[0],'ant')
        check(animals[1],'bison')
        check(animals[2],'camel')
        check(animals[3],'duck')
        check(animals[4],'elephant')
    })

    test('slice starting from index and ending at indexes (1 -> 5)', function(){
        // El index en el que acaba no lo devuelve
        const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
        const result = slice(animals,1,5)

        check(result.length, 4)
        check(result[0],'bison')
        check(result[1],'camel')
        check(result[2],'duck')
        check(result[3],'elephant')

        check(animals === result, false)

        check(animals.length, 5)
        check(animals[0],'ant')
        check(animals[1],'bison')
        check(animals[2],'camel')
        check(animals[3],'duck')
        check(animals[4],'elephant')
    })

    test('slice starting from negative index', function(){
        // Si solo se pasa indice negativo devuelve los últimos X elementos, respetando el orden
        const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
        const result = slice(animals,-2)
    
        check(result.length, 2)
        check(result[0],'duck')
        check(result[1],'elephant')

        check(animals === result, false)

        check(animals.length, 5)
        check(animals[0],'ant')
        check(animals[1],'bison')
        check(animals[2],'camel')
        check(animals[3],'duck')
        check(animals[4],'elephant')
    })

    test('slice starting from negative index v2', function(){
        // Si solo se pasa indice negativo devuelve los últimos X elementos, respetando el orden
        const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
        
        const result = slice(animals,-4)
    
        check(result.length, 4)
        check(result[0],'bison')
        check(result[1],'camel')
        check(result[2],'duck')
        check(result[3],'elephant')

        check(animals === result, false)

        check(animals.length, 5)
        check(animals[0],'ant')
        check(animals[1],'bison')
        check(animals[2],'camel')
        check(animals[3],'duck')
        check(animals[4],'elephant')
    })
    test('slice starting with positive and ending negative', function(){
        // En este caso, empieza en el indice 2 y empieza a restar "X" elementos
        const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
        const result = slice(animals, 2, -1)

        check(result.length, 2)
        check(result[0],'camel')
        check(result[1],'duck')

        check(animals === result, false)

        check(animals.length, 5)
        check(animals[0],'ant')
        check(animals[1],'bison')
        check(animals[2],'camel')
        check(animals[3],'duck')
        check(animals[4],'elephant')
    })

    test('slice starting with positive and ending negative that returns empty array', function(){

        const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
        const result = slice(animals, 2, -3)

        check(result.length, 0)
        check(result[0],undefined)

        check(animals === result, false)

        check(animals.length, 5)
        check(animals[0],'ant')
        check(animals[1],'bison')
        check(animals[2],'camel')
        check(animals[3],'duck')
        check(animals[4],'elephant')
    })

    test('slice starting with positive and ending negative that is bigger than available elements', function(){

        const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
        const result = slice(animals, 2 , -4)

        check(result.length, 0)
        check(result[0],undefined)

        check(animals === result, false)

        check(animals.length, 5)
        check(animals[0],'ant')
        check(animals[1],'bison')
        check(animals[2],'camel')
        check(animals[3],'duck')
        check(animals[4],'elephant')
    })

    test('slice starting with positive that is bigger than available elements', function(){

        const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
        const result = slice(animals, 6)

        check(result.length, 0)
        check(result[0],undefined)

        check(animals === result, false)

        check(animals.length, 5)
        check(animals[0],'ant')
        check(animals[1],'bison')
        check(animals[2],'camel')
        check(animals[3],'duck')
        check(animals[4],'elephant')
    })

    test('slice starting WITHOUT start/ending', function(){
        
        const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
        const result = slice(animals)

        check(result.length, 5)
        check(result[0],'ant')
        check(result[1],'bison')
        check(result[2],'camel')
        check(result[3],'duck')
        check(result[4],'elephant')

        check(animals === result, false)

        check(animals.length, 5)
        check(animals[0],'ant')
        check(animals[1],'bison')
        check(animals[2],'camel')
        check(animals[3],'duck')
        check(animals[4],'elephant')
    })

    test('slice with nonArray', function(){

        const notAnArray = 'hola'
        const result = slice(notAnArray, 2, 4)
        
        check(result, 'hola is not an ARRAY')
    })

    test('more than 3 arguments defined (Should throw an error)', function(){
        
        const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']
        const result = slice(animals, 2, 4, 6)
        
        check(result, 'Error, args EXCEEDED (min 1, max 3 args)')
    })

    test('Start and End not numbers', function(){
        
        const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']
        const result = slice(animals, NaN, 'mundo')
        
        check(result, 'Error, Start or End are not numbers')
    })
})

/*
console.log(slice(animals, 2, 4, 6)); // expected output: error, args EXCEEDED
*/