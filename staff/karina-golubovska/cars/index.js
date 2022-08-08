const spaceAvailable = 30
const step = 2
let score = 0

const car = {
    emoji: '🚘',
    x: 0,
    y: 0
}

const heart = {
    emoji: '❤️',
    x: 2 * Math.round(Math.random() * spaceAvailable / 2),
    // x: Math.round(Math.random() * 10),
    y: 9

}
document.onkeydown = event => {
    switch (event.key) {
        case 'ArrowRight':
            if (car.x < spaceAvailable)
                car.x = car.x + step
            break
        case 'ArrowLeft':
            if (car.x > 0)
                car.x = car.x - step
            break
    }
}
/*document.onkeydown = event => {
    switch (event.key) {
        case 'ArrowRight':
            if (car.x < 10)
                car.x = car.x + 2
            break
        case 'ArrowLeft':
            if (car.x > 0)
                car.x = car.x - 2
            break
    }
 
} */
const intervalId = setInterval(render, 500)

function render() {
    console.clear()
    console.log(`ACTUAL SCORE ${score}`)
    for (let i = 9; i >= 0; i--) {
        if (i === 0)
            if (heart.y === 0 && ((car.x === heart.x) || Math.abs(car.x - heart.x) < 2)) {
                console.log('😘😘😘😘😘😘😘😘😘😘')
                score++
            }
            else if (heart.y === 0 && heart.x > car.x) {
                console.log(' '.repeat(car.x) + car.emoji + ' '.repeat(heart.x - car.x - 2) + heart.emoji)
            }

            else if (heart.y === 0 && heart.x < car.x) {
                console.log(' '.repeat(heart.x) + heart.emoji + ' '.repeat(car.x - heart.x - 2) + car.emoji)
            }

            else
                console.log(' '.repeat(car.x) + car.emoji)
        else if (i === heart.y)
            console.log(' '.repeat(heart.x) + heart.emoji)
        else
            console.log(i)
    }
    if (score === 2) {
        clearInterval(intervalId)

        console.log('GAME WON')
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

let interval = setInterval(render,intervalSpeed)
setTimeout(function(){
    clearInterval(intervalId)
    console.log ('loooose')
},
6000)

















/*const boom = {
    emoji: '💥',
    x: 0,
    y: 0

}


// car.style.left = car.x + 'px'



for (let i = 9; i >= 0; i--) {
    if (i === heart.y)
        console.log(' '.repeat(heart.x) + heart.emoji)
    else if (i === 0)
        console.log(' '.repeat(car.x) + car.emoji)
    else
        console.log(i)
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

function updateBoom() {
    if (heart.y === 0 && car.x === heart.x)
        console.log(' '.repeat(boom.x) + boom.emoji)

}

    // for (let i = 9; i >= 0; i--) {
    //     if (i === heart.y)
    //         console.log(' '.repeat(heart.x) + heart.emoji)
    //     else
    //         console.log(i)

    // setInterval(updateHeart, 200)
    // function updateHeart() {
    //     heart.y -= 1
    //     console.clear()
    //     for (let i = 0; i < 10; i++) {
    //         if (i === heart.y)
    //             console.log(' '.repeat(heart.x) + heart.emoji)
    //         else
    //             console.log(i)
    //     }
    // }
    // if (heart.y === 0) {
    //     heart.y = 9
    //     heart.x = Math.round(Math.random() * 10)
    // }
*/

