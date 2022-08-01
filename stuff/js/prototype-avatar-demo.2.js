function Person(avatar) { 
    if (avatar !== undefined)
        this.avatar = avatar 
}

Person.prototype.avatar = '👤'

var peter = new Person('🧑‍🎤')

peter.avatar
// '🧑‍🎤'
peter.__proto__.avatar
// '👤'
peter
// Person {avatar: '🧑‍🎤'}avatar: "🧑‍🎤"[[Prototype]]: Object
delete peter.avatar
// true
peter
// Person {}
peter.avatar
// '👤'
delete peter.avatar
// true
peter.avatar
// '👤'
delete peter.__proto__.avatar
// true
peter.avatar
// undefined
var anna = new Person
// undefined
anna.avatar
// undefined