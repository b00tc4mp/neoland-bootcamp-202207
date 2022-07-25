let spaceAvailable = 30
let step = 2
let score = 0
let intervalSpeed = 300
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




function render() {
    console.clear();
    // if( score===3)
    // clearInterval(intervalId)        
    // setInterval(render, 200)

    // if( score ===7)
    // clearInterval(intervalId)
    //         setInterval(render, 100)

    console.log(`Actual Score ${score}`)
    for (let i = 9; i >= 0; i--) {

        if (i === 0)
            if (heart.y === 0 && (car.x === heart.x) || Math.abs(car.x - heart.x) < 2) {
                console.log('👻👻👻👻👻👻👻')
                score++
            } else if (heart.y === 0 && heart.x > car.x) {
                console.log('-'.repeat(car.x) + car.emoji + ' '.repeat(heart.x - car.x - 2) + heart.emoji)
            } else if (heart.y === 0 && heart.x < car.x) {
                console.log('-'.repeat(heart.x) + heart.emoji + ' '.repeat(car.x - heart.x - 2) + heart.emoji)
            } else
                console.log('-'.repeat(car.x) + car.emoji)
        else if (i === heart.y)
            console.log('-'.repeat(heart.x) + heart.emoji)

        else
            console.log(i)
    }
    if (score === 10) {
        clearInterval(intervalId)
        console.log('Game Won')
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
let intervalId = setInterval(render, intervalSpeed)

setTimeout(function () {
    clearInterval(intervalId)
    console.log('loosee')

}, 8000)