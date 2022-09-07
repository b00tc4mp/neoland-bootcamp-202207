class Thing {
    constructor(name) {
        this.name = name
    }

    toString() {
        return `${this.name} { volume: ${this.getVolume()} }`
    }

    getVolume() { return null }
}

//

class Box extends Thing {
    constructor(width, height, length) {
        super('Box')

        this.width = width
        this.height = height
        this.length = length
    }

    getVolume() { // method overriding
        return this.width * this.height * this.length
    }
}

//

class Sphere extends Thing {
    constructor(radius) {
        super('Sphere')

        this.radius = radius
    }

    getVolume() {
        return 4 / 3 * Math.PI * this.radius ** 3
    }
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