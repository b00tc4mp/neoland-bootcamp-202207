const spaceAvailable = 30
const step = 2

let score = 0

const car = {
    emoji: '🚔️',
    x: 0,
    y: 0
}

const heart = {
    emoji: '❤️',
    x: 2 * Math.round(Math.random() * spaceAvailable / 2),
    y: 9
}

let nextLevel = 2
let speed = 1000

document.onkeydown = event => {
    switch (event.key) {
        case 'ArrowRight':
            if (car.x < spaceAvailable)
                car.x += step
            break
        case 'ArrowLeft':
            if (car.x > 0)
                car.x -= step
            break
    }
}

let intervalId = setInterval(render, speed)

function render() {
    console.clear()

    console.log(`ACTUAL SCORE ${score}`)

    for (let i = 9; i >= 0; i--) {
        if (i === 0)
            if (heart.y === 0 && ((car.x === heart.x) || Math.abs(car.x - heart.x) < 2)) {
                console.log('😘😘😘😘😘😘😘😘😘😘')
                score++

            } else if (heart.y === 0 && heart.x > car.x) {
                console.log(' '.repeat(car.x) + car.emoji + ' '.repeat(heart.x - car.x - 2) + heart.emoji)

            } else if (heart.y === 0 && heart.x < car.x) {
                console.log(' '.repeat(heart.x) + heart.emoji + ' '.repeat(car.x - heart.x - 2) + car.emoji)

            } else
                console.log(' '.repeat(car.x) + car.emoji)

        else if (i === heart.y)
            console.log(' '.repeat(heart.x) + heart.emoji)

        else
            console.log(i)
    }

    console.log(speed)

    if (score === nextLevel) {
        if (speed < 400) {
            intervalId = setInterval(render, (speed))
            nextLevel = score + 2
            console.log('next level!!!')
        }
        
        else {
            clearInterval(intervalId)

            console.log('GAME WON')
        }
    }

    updateHeart()
}


function updateHeart() {
    if (heart.y === 0) {
        heart.y = 9
        heart.x = Math.round(Math.random() * 10)
    } else
        heart.y -= 1
}
