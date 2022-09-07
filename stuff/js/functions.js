// #1

// function add(a, b) {
//     return a + b
// }

var add = function(a, b) {
    return a + b
}

add(1, 2)
// 3

var sub = function(a, b) {
    return a - b
}

var mul = function(a, b) {
    return a * b
}

var div = function(a, b) {
    return a / b
}

var calculin = {}

calculin.add = add
calculin.sub = sub
calculin.mul = mul
calculin.div = div

calculin.add(1, 2)
// 3

calculin.sub(1, 2)
// -1

calculin.mul(2, 3)
// 6

calculin.div(1, 2)
// 0.5

// #2

var print = console.log

print('hola mundo')
// console.log('hola mundo')

// #3

function goTo(weather) {
    if (weather === '🌧️')
        return '🎥'
    else if (weather === '☀️')
        return '🏖️'
    else if (weather === '🌤️')
        return '🏕️'
}

goTo('☀️')
// '🏖️'
goTo('🌧️')
// '🎥'
