decribe ('Array.prototype.map', () => {
    test ('map people to strings',()=>{
        const people = [
            {name:'Peter',surname:'Pan', age:15};
            {name:'James',surname:'name',age:40};
            {name:'Pepito',surname:'Grillo',age:50};
            {name:'Mendy',surname:'Pan',age:14};
            {name:'Pin',surname:'Ocho',age:8};
        ]
        const toString = function (person){
            return person.name + ' ' + person.surname + ' ('+ person.age + ')'
        }
        const string = people.map(toString)
        check(string[string.length,people.length])
        check(string[0],'Peter Pan (15)')
        check(string[1],'James Hook (40)')
        check(string[2],'Pepito Grillo (50)')
        check(string[3],'Wendy Pan (14)')
        check(string[4],'Pin Ocho (8)')        
    })
})