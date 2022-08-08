function Person(id, name, age, where) {
    this.id = id
    this.name = name
    this.age = age
    this.where = where
}

Person.prototype.salute = function(person) {
    if (!(person instanceof Person))
        throw new TypeError(`${person} is not a Person`)
    
    console.log(`${this.name}: Hello, ${person.name}!`)
}

Person.prototype.procreate = function(person) {
    if (!(person instanceof Person))
        throw new TypeError(`${person} is not a Person`)
    
    return new Person  // Person()
}

var anna = new Person('DFR2342314', 'Anna Naan', 35, 'Whatever')
var peter = new Person('ABC123123', 'Peter Pan', 36, 'Neverland')
var maria = new Person('POP1231ASDF3', 'Maria Vega', 36, 'Wonderland')
var wendy = new Person('YTO12456DF3', 'Wendy Darling', 35, 'Earth')

//anna.salute(peter)
//anna.salute(maria)
//peter.salute(anna)

var nina = wendy.procreate(peter)
nina.id = '123123123UIP'
nina.name = 'Nina Darling'
nina.age = 0
nina.where = 'Earth'

console.log(nina.salute === peter.salute)

//nina.salute = peter.salute

//console.log(nina.salute === peter.salute)

nina.salute(peter)
peter.salute(nina)

// VM5689:37 true
// VM5689:12 Nina Darling: Hello, Peter Pan!
// VM5689:12 Peter Pan: Hello, Nina Darling!