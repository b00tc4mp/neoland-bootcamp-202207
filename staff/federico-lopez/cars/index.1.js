const stone = { x: 10, y: Math.round(Math.random() * 20) }
const car = { x: 0 }

const step = 2

document.onkeydown = event => {
    switch (event.key) {
        case 'ArrowLeft':
            if (car.x > 0)
                car.x -= step
            
            break
        case 'ArrowRight':
            if (car.x < 20) 
                car.x += step

            break
    }
}

setInterval(render, 200)

function updateStoneY() {
    stone.y--

    if (stone.y < 0) {
        // check collision

        // else
        stone.x = Math.round(Math.random() * 20)
        stone.y = 9
    }
}

function render() {
    console.clear()

    updateStoneY()

    let canvas = ''

    for (var i = 9; i >= 1; i--) {
        if (stone.y === i)
            canvas += ' '.repeat(stone.x) + '❤️' + '\n'
        else
            canvas += '\n'
    }

    if (stone.y === 0) {
        if (stone.x === car.x || Math.abs(stone.x - car.x) === 1)
            canvas += ' '.repeat(car.x) + '❤️💥'
        else if (stone.x > car.x)
            canvas += ' '.repeat(car.x) + '🚔' + ' '.repeat(stone.x - car.x - 2) + '❤️'
        else
            canvas += ' '.repeat(stone.x) + '❤️' + ' '.repeat(car.x - stone.x - 2) + '🚔'
    } else
        canvas += ' '.repeat(car.x) + '🚔'

    console.log(canvas)
}