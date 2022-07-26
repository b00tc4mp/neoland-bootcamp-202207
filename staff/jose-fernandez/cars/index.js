let spaceAvailable = 30
let step = 2
var score = 0
var intervalSpeed = 300
const car = {
    emoji: '🚘',
    x: 5,
    y: 0
}
const heart = {
    emoji: '👽',
    x: (2 * Math.round(Math.random() * spaceAvailable / 2)),
    y: 9
}

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

// let intervalId = setInterval(render, intervalSpeed)
var intervalId = setInterval(render, intervalSpeed)

// if(score===3 && intervalSpeed===300)
// intervalSpeed-=200

// if(score===7 && intervalSpeed===300)
// intervalSpeed-=100

function render() {
    console.clear();

    console.log(`Actual Score ${score}`)

    console.log(intervalSpeed)

    for (let i = 9; i >= 0; i--) {

        if (i === 0)
            if (heart.y === 0 && ((car.x === heart.x) || Math.abs(car.x - heart.x) < 2)) {
                console.log('👻👻👻👻👻👻👻')
                score += 1

                if (score === 3) {

                    clearInterval(intervalID)
                    intervalSpeed -= 100
                    intervalID = setInterval(render, intervalSpeed)

                }
                if (score === 7) {
                    clearInterval(intervalID)
                    intervalSpeed -= 150
                    intervalID = setInterval(render, 50)
                }

                if (score === 10) {
                    clearInterval(intervalID)
                    console.log('Game Won')
                    console.clear()
                }
            } else if (heart.y === 0 && heart.x > car.x) {
                console.log('-'.repeat(car.x) + car.emoji + ' '.repeat(heart.x - car.x - 2) + heart.emoji)
            } else if (heart.y === 0 && heart.x < car.x) {
                console.log('-'.repeat(heart.x) + heart.emoji + ' '.repeat(car.x - heart.x - 2) + car.emoji)
            } else
                console.log('-'.repeat(car.x) + car.emoji)

        else if (i === heart.y)
            console.log('-'.repeat(heart.x) + heart.emoji)

        else
            console.log(' '.repeat(i))
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




setTimeout(function () {
    clearInterval(intervalId)
    console.log('loosee')

}, 100000)