function toString() {
    return `${this.name} ${this.surname} (${this.age})`
}

var o = { name: 'Peter', surname: 'Pan', age: 15 }

o.toString = toString

o.toString()
// 'Peter Pan (15)'

// OR

function toString() {
    return `${this.name} ${this.surname} (${this.age})`
}

var o = { name: 'Peter', surname: 'Pan', age: 15 }

//o.toString = toString

//o.toString()

toString.call(o)
// 'Peter Pan (15)'

o.toString
// undefined