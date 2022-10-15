const spaceAvailable = 30
const step = 2
let score = 0
let speed = 500
let car = {
    emoji: "🚔️",
    x: 0,
    y: 0 
 }

let heart = {
    emoji: "♥️",
    x: 2 * Math.round(Math.random() * spaceAvailable / 2),
    y: 9
}

let bomb = {
    emoji:'💥'
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

let intervalId = setInterval(render, speed)
let intervalId2

function render() {
    console.clear()

    console.log (`SCORE ${score}`)

    for (let i = 9; i >= 0; i--) {
        if (i === 0) {
            if (heart.y === 0 && ((car.x === heart.x) || Math.abs(car.x - heart.x) < 2)) {
                console.log(bomb.emoji)
                score++

            } else if(heart.y === 0 && heart.x > car.x) {
                console.log(' '.repeat(car.x) + car.emoji + ' '.repeat(heart.x - car.x -2) + heart.emoji)

            } else if(heart.y === 0 && heart.x < car.x) {
                console.log(' '.repeat(heart.x) + heart.emoji + ' '.repeat(car.x - heart.x -2) + car.emoji)

            } else {
                console.log('-'.repeat(car.x) + car.emoji)
            }
        } else if (i === heart.y) {
            console.log('-'.repeat(heart.x) + heart.emoji)

        } else {
            console.log(i)
        }
        if (score === 10) {
            console.clear()
            console.log('You won')

            clearInterval(intervalId2)

            break
        }
    }
    
    // if (score === 0){ 
    //     clearInterval(intervalId)       
    
    // }
    if (score == 4 && speed === 500){
        speed = 200
        clearInterval(intervalId)
        intervalId2 = setInterval(render, speed)
        
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


// let timeout = 0
// setTimeout(function (){
//     clearInterval(intervalId)
//     console.log ('Game Over')
// }, 1200)

// var myTimeout = setTimeout (myGreeting, 5000)    
// let timeout
// function myGreeting(){
//     clearTimeout(timeout)
//     timeout = setTimeout(1000)
//     console.log ('noooooo')
// }
// const myTimeout = setTimeout(myGreeting, 5000);

// function myStopFunction() {
//   clearTimeout(myTimeout);
// }
// clearTimeout(timeout)
