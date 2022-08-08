describe('filter' , function(){
    test ('filter pan family ' , function(){
        const people = [
        {name: 'Peter',surname: 'Pan'},
        {name: 'James', surname:'Hook'},
        {name: 'Pepito',surname:'Grillo'},
        {name: 'Wendy',surname:'Pan'},
        {name: 'Pinocho',surname:'Grillo'},]
        const pans = people.filter(function(person){
            return person.surname === 'Pan'
        })
         check(pans.length,2)
         check(pans[0] , people[0])
         check(pans[1], people[1])


    })
})
