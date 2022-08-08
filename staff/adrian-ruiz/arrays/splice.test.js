describe('TESTING Splice in arrays',function(){
    test('Insert element on array', function(){
        /* OK */
        const months = ['Jan', 'March', 'April', 'June'];
        const result = splice(months, 1, 0, 'Feb')

        check(result instanceof Array, true)
        check(result.length, 0)
        check(months.length, 5)
        check(months[0], 'Jan')
        check(months[1], 'Feb')
        check(months[2], 'March')
        check(months[3], 'April')
        check(months[4], 'June')
    })

    test('Insert 3 element on array from index 1', function(){
        /* OK */
        const months = ['Jan', 'March', 'April', 'June'];
        const result = splice(months, 1, 0, 'Feb','Sept','Oct')

        check(result instanceof Array, true)
        check(result.length, 0)
        check(months.length, 7)
        check(months[0], 'Jan')
        check(months[1], 'Feb')
        check(months[2], 'Sept')
        check(months[3], 'Oct')
        check(months[4], 'March')
        check(months[5], 'April')
        check(months[6], 'June')
    })

    test('Insert 3 element on array from last indedx', function(){
        /* OK */
        const months = ['Jan', 'March', 'April', 'June'];
        const result = splice(months, 3, 0, 'Feb','Sept','Oct')

        check(result instanceof Array, true)
        check(result.length, 0)
        check(months.length, 7)
        check(months[0], 'Jan')
        check(months[1], 'March')
        check(months[2], 'April')
        check(months[3], 'Feb')
        check(months[4], 'Sept')
        check(months[5], 'Oct')
        check(months[6], 'June')
    })

    test('Replace 1 element on array', function(){
        // OK
        const months = ['Jan', 'Feb', 'March', 'April', 'June'];
        const result = splice(months, 4, 1, 'May')

        check(result instanceof Array, true)
        check(result.length, 1)
        check(result[0], 'June')

        check(months.length, 5)
        check(months[0], 'Jan')
        check(months[1], 'Feb')
        check(months[2], 'March')
        check(months[3], 'April')
        check(months[4], 'May')
    })

    test('Remove 2 element on array from last index (JUST 1 REMOVED) and dont insert any element', function(){
        // OK
        const months = ['Jan', 'Feb', 'March', 'April', 'June'];
        const result = splice(months, 4, 2)
        
        check(result instanceof Array, true)
        check(result.length, 1)
        check(result[0], 'June')
        

        check(months.length, 4)
        check(months[0], 'Jan')
        check(months[1], 'Feb')
        check(months[2], 'March')
        check(months[3], 'April')
        
    })
    test('Remove 2 element on array from index 1 and dont insert any element', function(){
        // OK
        const months = ['Jan', 'Feb', 'March', 'April', 'June'];
        const result = splice(months, 1, 2)
        
        check(result instanceof Array, true)
        check(result.length, 2)
        check(result[0], 'Feb')
        check(result[1], 'March')
        

        check(months.length, 3)
        check(months[0], 'Jan')
        check(months[1], 'April')
        check(months[2], 'June')
        
    })
    test('Remove 5 element on array from index 1 and dont insert any element', function(){
        // OK
        const months = ['Jan', 'Feb', 'March', 'April', 'June'];
        const result = splice(months, 1, 5)
        
        check(result instanceof Array, true)
        check(result.length, 4)
        check(result[0], 'Feb')
        check(result[1], 'March')
        check(result[2], 'April')
        check(result[3], 'June')
        

        check(months.length, 1)
        check(months[0], 'Jan')
    })
    test('Replace 2 elements from index 0 and insert 3 new elements', function(){
        // OK
        const myFish = ['angel', 'clown', 'trumpet', 'sturgeon','pepe']
        const result = splice(myFish, 0, 2, 'parrot', 'anemone', 'blue')

        check(result instanceof Array, true)
        check(result.length, 2)
        check(result[0], 'angel')
        check(result[1], 'clown')

        check(myFish.length, 6)
        check(myFish[0], 'parrot')
        check(myFish[1], 'anemone')
        check(myFish[2], 'blue')
        check(myFish[3], 'trumpet')
        check(myFish[4], 'sturgeon')
    })

    test('Replace ALL elements from index 0 and insert 3 new elements', function(){
        // OK
        const myFish = ['angel', 'clown', 'trumpet', 'sturgeon','pepe']
        const result = splice(myFish, 0, 5, 'parrot', 'anemone', 'blue')

        check(result instanceof Array, true)
        check(result.length, 5)
        check(result[0], 'angel')
        check(result[1], 'clown')
        check(result[2], 'trumpet')
        check(result[3], 'sturgeon')
        check(result[4], 'pepe')

        check(myFish.length, 3)
        check(myFish[0], 'parrot')
        check(myFish[1], 'anemone')
        check(myFish[2], 'blue')
    })

    test('Replace MORE ELEMENTS THAN ARRAY LENGTH from index 0 and insert 3 new elements', function(){
        // OK
        const myFish = ['angel', 'clown', 'trumpet', 'sturgeon','pepe']
        const result = splice(myFish, 0, 20, 'parrot', 'anemone', 'blue')

        check(result instanceof Array, true)
        check(result.length, 5)
        check(result[0], 'angel')
        check(result[1], 'clown')
        check(result[2], 'trumpet')
        check(result[3], 'sturgeon')
        check(result[4], 'pepe')

        check(myFish.length, 3)
        check(myFish[0], 'parrot')
        check(myFish[1], 'anemone')
        check(myFish[2], 'blue')
    })

    test('Replace 2 elements from last index and insert 3 new elements', function(){
        // OK
        const myFish = ['angel', 'clown', 'trumpet', 'sturgeon','pepe']
        const result = splice(myFish, 4, 2, 'parrot', 'anemone', 'blue')

        check(result instanceof Array, true)
        check(result.length, 1)
        check(result[0], 'pepe')

        check(myFish.length, 7)
        check(myFish[0], 'angel')
        check(myFish[1], 'clown')
        check(myFish[2], 'trumpet')
        check(myFish[3], 'sturgeon')
        check(myFish[4], 'parrot')
        check(myFish[5], 'anemone')
        check(myFish[6], 'blue')
    })

    test('Replace 2 elements from index 2 and insert 4 new elements', function(){
        // OK
        const myFish = ['angel', 'clown', 'trumpet', 'sturgeon','pepe']
        const result = splice(myFish, 2, 2, 'parrot', 'anemone', 'blue','Jose')

        check(result instanceof Array, true)
        check(result.length, 2)
        check(result[0], 'trumpet')
        check(result[1], 'sturgeon')

        check(myFish.length, 7)
        check(myFish[0], 'angel')
        check(myFish[1], 'clown')
        check(myFish[2], 'parrot')
        check(myFish[3], 'anemone')
        check(myFish[4], 'blue')
        check(myFish[5], 'Jose')
        check(myFish[6], 'pepe')
    })

    test('Remove 1 element from negative index', function(){
        
        const myFish = ['angel', 'clown', 'trumpet', 'sturgeon']
        const result = splice(myFish, -3, 1)
        // Expected my fish -> ['angel', 'trumpet', 'sturgeon']
        // Expected result -> ['clown']
        /*
        EMPIEZO DE : ['angel', 'clown', 'trumpet', 'sturgeon']
        Recupero los elementos a eliminar
        1. ['clown']
        Empiezo a posicionar los elementos
        2. ['angel', 'trumpet', 'trumpet', 'sturgeon']
        3. ['angel', 'trumpet', 'sturgeon', 'sturgeon']
        Borro la cantidad de elementos a eliminar
        4. ['angel', 'trumpet', 'sturgeon']
        */
        check(result instanceof Array, true)
        check(result.length, 1)
        check(result[0], 'clown')

        check(myFish.length, 3)
        check(myFish[0], 'angel')
        check(myFish[1], 'trumpet')
        check(myFish[2], 'sturgeon')
    })

    test('Remove all elements from index 2', function(){
        debugger
        const myFish = ['angel', 'clown', 'trumpet', 'sturgeon']
        const result = splice(myFish, 2)

        check(result instanceof Array, true)
        check(result.length, 2)
        check(result[0], 'trumpet')
        check(result[1], 'sturgeon')

        check(myFish.length, 2)
        check(myFish[0], 'angel')
        check(myFish[1], 'clown')

    })

    // Faltan mas tests: por ejemplo eliminar desde indice negativos e introducir elementos
})


// si Start es mayor a la longitud del array, empezará en la longitud del array
// si es negativo, empezará esa cantidad de elementos contando desde el final

// Si deletecount se omite -> todos los elementos desde start hasta el final del array eliminados
// Si es mayor que el arr.length - start -> todos desde start hasta el final eliminados
// Si deletecount es igual a 0 o negativo, ninguno se eliminará


// Si no se especifica ningun elemento nuevo, solo eliminaremos elementos del array


// El valor devuelto es un array con los elementos eliminados. Si no se elimina ninguno, devuelve una array vacio