function Person(avatar) { 
    if (avatar !== undefined)
        this.avatar = avatar 
}

Person.prototype.avatar = '👤'

var peter = new Person

peter.avatar
// '👤'
peter.__proto__.avatar
// '👤'