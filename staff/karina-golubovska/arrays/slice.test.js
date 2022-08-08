describe('slice',() => {
    test('slice starting from index' , () =>{
 const animals = ["ant" ,"bison" ,"camel" ,"duck" ,"elephant" ]
 const result = slice(animals,2)

check(result.length , 3)
check(result[0])='camel'
check(result[1])= 'duck'
check(result[2]) ='elephant'

check(animals.length , 5 )
check(animals[0]), 'ant'
check(animals[1]), 'bison'
check(animals[2]), 'camel'
check(animals[3]), 'duck'
check(animals[4]), 'elephant' 
    })
      
})