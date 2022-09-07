function Person(id, name, age, where) {
    this.id = id
    this.name = name
    this.age = age
    this.where = where

    this.salute = function(to) {
        if (!(to instanceof Person))
            throw new TypeError(`${to} is not a Person`)
        
        console.log(`${this.name}: Hello, ${to}!`)
    }
}

var anna = new Person('DFR2342314', 'Anna Naan', 15, 'Whatever')
var peter = new Person('ABC123123', 'Peter Pan', 16, 'Neverland')
var maria = new Person('POP1231ASDF3', 'Maria Vega', 16, 'Wonderland')
var wendy = new Person('YTO12456DF3', 'Wendy Darling', 15, 'Earth')

anna.salute('Peter')
anna.salute('Maria')
peter.salute('Anna')

// VM3029:9 Uncaught TypeError: Peter is not a Person
//     at Person.salute (<anonymous>:9:19)
//     at <anonymous>:20:6