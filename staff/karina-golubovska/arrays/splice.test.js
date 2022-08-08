describe('splice',() => {
    test ('insert at index ' , () =>{
        const frutas =['melon','manzana','pera','fresa'];
        const result = splice ( frutas , 1, 0 , 'platano') ; 
        
})
check (result instanceof Array , true )
    check (result.length, 0)
    
    check (frutas.length, 5)
    check (frutas[0] , 'melon')
    check (frutas[1] , 'platano')
    check (frutas[2] , 'manzana')
    check (frutas[3] , 'pera')
    check (frutas[4] , 'fresa')
   }) 
     
    