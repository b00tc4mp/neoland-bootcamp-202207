function Thing(name) {
    this.name = name
}

Thing.prototype.toString = function () {
    return `${this.name} { volume: ${this.getVolume()} }`
}

Thing.prototype.getVolume = function () { return null }

//

function Box(width, height, length) {
    Thing.call(this, 'Box')

    this.width = width
    this.height = height
    this.length = length
}

Box.prototype = Object.create(Thing.prototype)
Box.prototype.constructor = Box

Box.prototype.getVolume = function () { // method overriding
    return this.width * this.height * this.length
}

//

function Sphere(radius) {
    Thing.call(this, 'Sphere')

    this.radius = radius
}

Sphere.prototype = Object.create(Thing.prototype)
Sphere.prototype.constructor = Sphere

Sphere.prototype.getVolume = function () { // method overriding
    return 4 / 3 * Math.PI * this.radius ** 3
}

//

var box1 = new Box(10, 10, 10)
var box2 = new Box(10, 20, 30)
var sphere1 = new Sphere(10)
var sphere2 = new Sphere(5)

console.log(box1.toString())
console.log(box2.toString())
console.log(sphere1.toString())
console.log(sphere2.toString())

// VM749:50 Box { volume: 1000 }
// VM749:51 Box { volume: 6000 }
// VM749:52 Sphere { volume: 4188.790204786391 }
// VM749:53 Sphere { volume: 523.5987755982989 }
// undefined
delete Box.prototype.getVolume
// true
box1.toString()
// 'Box { volume: null }'