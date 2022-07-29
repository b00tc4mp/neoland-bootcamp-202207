function Person(id, name, age, country) {
    this.id = id
    this.name = name
    this.age = age
    this.country = country

    this.salute = function(to) {
        console.log(`${this.name}: Hello, ${to}!`)
    }
}

var anna = new Person('DFR2342314', 'Anna Naan', 15, 'Whatever')
var peter = new Person('ABC123123', 'Peter Pan', 15, 'Neverland')

anna.salute('Peter')
peter.salute('Anna')
// VM2247:8 Anna Naan: Hello, Peter!
// VM2247:8 Peter Pan: Hello, Anna!