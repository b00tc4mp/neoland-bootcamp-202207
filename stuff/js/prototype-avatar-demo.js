function Person(avatar) { 
    if (avatar !== undefined)
        this.avatar = avatar 
}

Person.prototype.avatar = '👤'

//var peter = new Person('🧑‍🎤')

// equal to

var peter

peter = new Object

peter.__proto__ = {}
peter.__proto__.constructor = Person
peter.__proto__.avatar = '👤'

Person.call(peter, '🧑‍🎤')