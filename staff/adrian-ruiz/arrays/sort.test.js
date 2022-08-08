describe('TESTING Sort in arrays', function(){
    test('Sort 1 array of numbers by default(UNICODE)', function(){
        
        array = sort([2, 10, 4, 7, 50, 1])
        //[1, 10, 2, 4, 50, 7]
        check(array[0],1)
        check(array[1],10)
        check(array[2],2)
        check(array[3],4)
        check(array[4],50)
        check(array[5],7)
    })

    test('Sort 1 array of strings by default(UNICODE)', function(){
        array = sort(['yellow', 'Hola', 'Probando', 'hola','World'])
        //['Hola', 'Probando', 'World', 'hola', 'yellow']
        check(array[0], 'Hola')
        check(array[1], 'Probando')
        check(array[2], 'World')
        check(array[3], 'hola')
        check(array[4], 'yellow')

    })

    test('Sort 1 array of strings by a > b', function(){
        arrayToTest = ['Malaga','barcelona','zamora','Castellón','caceres','Zaragoza']
                    //['Castellón','Malaga','Zaragoza','barcelona','caceres','zamora']
        array= sort(arrayToTest, function(a,b){
            
            if(a > b)
            return 1
            if(a < b)
            return -1
        })

        check(array[0],'Castellón')
        check(array[1],'Malaga')
        check(array[2],'Zaragoza')
        check(array[3],'barcelona')
        check(array[4],'caceres')
        check(array[5],'zamora')
    })

    test('Sort 1 array of strings by b > a', function(){
        arrayToTest = ['Malaga','barcelona','zamora','Castellón','caceres','Zaragoza']

        array= sort(arrayToTest, function(a,b){
            
            if(a > b)
            return -1
            if(a < b)
            return 1
        })

        check(array[0],'zamora')
        check(array[1],'caceres')
        check(array[2],'barcelona')
        check(array[3],'Zaragoza')
        check(array[4],'Malaga')
        check(array[5],'Castellón')
    })

    // A partir de aqui TESTS de fede

    test('order array of strings without compare function', function () {
        const months = ['March', 'Jan', 'Feb', 'Dec']

        const result = sort(months)

        check(months, result)
        check(months[0], 'Dec')
        check(months[1], 'Feb')
        check(months[2], 'Jan')
        check(months[3], 'March')
    })

    test('order array of numbers without compare function', function () {
        const numbers = [1, 30, 4, 21, 100000]

        const result = sort(numbers)

        check(numbers, result)
        check(numbers[0], 1)
        check(numbers[1], 100000)
        check(numbers[2], 21)
        check(numbers[3], 30)
        check(numbers[4], 4)
    })

    test('order array of strings with undefined element and without compare function', function () {
        const strings = ['z', 'a', 'b', undefined, 'j']

        const result = sort(strings)

        check(strings, result)
        check(strings[0], 'a')
        check(strings[1], 'b')
        check(strings[2], 'j')
        check(strings[3], 'z')
        check(strings[4], undefined)
    })

    test('order array of strings with undefined element at the beginning of the array and without compare function', function () {
        const strings = [undefined, 'a', false, 'z', null]
        const result = sort(strings)

        check(strings, result)
        check(strings[0], 'a')
        check(strings[1], false)
        check(strings[2], null)
        check(strings[3], 'z')
        check(strings[4], undefined)
    })

    test('sort in ascending order array of numbers with compare function ', function() {
        const numbers = [1, 30, 4, 21, 100000]

        const result = sort(numbers, function(a, b) {
            return a - b
        })

        check(numbers, result)
        check(numbers[0], 1)
        check(numbers[1], 4)
        check(numbers[2], 21)
        check(numbers[3], 30)
        check(numbers[4], 100000)
    }) 

    test('sort array of objects by number with compare function', function() {
        const items = [
            { name: 'Edward', value: 21 },
            { name: 'Sharpe', value: 37 },
            { name: 'And', value: 45 },
            { name: 'The', value: -12 },
            { name: 'Magnetic', value: 13 },
            { name: 'Zeros', value: 37 }
          ]
          
          const result = sort(items, function(a, b) {
            return a.value - b.value
          })

          check(items, result)
          check(items[0].name, 'The')
          check(items[1].name, 'Magnetic')
          check(items[2].name, 'Edward')
          check(items[3].name, 'Sharpe')
          check(items[4].name, 'Zeros')
          check(items[5].name, 'And')    
    })

    test('sort array of objects by string with compare function', function() {
        const items = [
            { name: 'Edward', value: 21 },
            { name: 'Sharpe', value: 37 },
            { name: 'And', value: 45 },
            { name: 'The', value: -12 },
            { name: 'Magnetic', value: 13 },
            { name: 'Zeros', value: 37 }
          ]
          
          const result = sort(items, function(a, b) {
            const nameA = a.name.toUpperCase()
            const nameB = b.name.toUpperCase()
            
            if (nameA < nameB) {
              return -1;
            }

            if (nameA > nameB) {
              return 1;
            }
            
            return 0;
          })

          check(items, result)
          check(items[0].name, 'And')
          check(items[1].name, 'Edward')
          check(items[2].name, 'Magnetic')
          check(items[3].name, 'Sharpe')
          check(items[4].name, 'The')
          check(items[5].name, 'Zeros')    
    })

    test('sort in ascending order array of numbers with undefined value and compare function ', function() {
        
        const numbers = [undefined, 30, 4, 21, 100000]

        const result = sort(numbers, function(a, b) {
            return a - b
        })

        check(numbers, result)
        check(numbers[0], 4)
        check(numbers[1], 21)
        check(numbers[2], 30)
        check(numbers[3], 100000)
        check(numbers[4], undefined)
    })

    test('sort in ascending order array of numbers with multiple undefined values and compare function ', function() {
        const numbers = [undefined, undefined, 4, undefined, 100000]

        const result = sort(numbers, function(a, b) {
            return a - b
        })

        check(numbers, result)
        check(numbers[0], 4)
        check(numbers[1], 100000)
        check(numbers[2], undefined)
        check(numbers[3], undefined)
        check(numbers[4], undefined)
    })

    test('sort in a complex order array of strings with compare function', function() {
        const strings = ['j', 'a', 'z', 'w', 'm', 'k']

        const result = sort(strings, function(a, b) {
            aValue = a.charCodeAt(0)
            bValue = b.charCodeAt(0)

            if (a === 'z') return -1
            else if (b === 'z') return 1
            
            return aValue - bValue
        })

        check(strings, result)
        check(strings[0], 'z')
        check(strings[1], 'a')
        check(strings[2], 'j')
        check(strings[3], 'k')
        check(strings[4], 'm')
        check(strings[5], 'w')
    })
})