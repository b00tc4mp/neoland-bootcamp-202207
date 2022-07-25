const spaceAvailable = 30
const step = 2

var score = 0

const car = {
    emoji:'🚘️',
    x:0,
    y:0
}

const bomb = {
    emoji: '💣️',
    x: 2 * Math.round(Math.random()*spaceAvailable/2),
    y: 9
}

const explosion = '💥'

document.onkeydown = event => {
    
    switch(event.key){
        case 'ArrowRight':
            if(car.x < spaceAvailable)
            car.x += step
            break
        case 'ArrowLeft':
            if(car.x > 0)
            car.x -= step
            break
    }
    
}

var velocidad = 800
var intervalID = setInterval(render, velocidad)

function render(){
    console.clear()

    const scoreH1 = document.querySelector('#score')
    scoreH1.textContent = score
    console.log(velocidad)
    for(let i = 9; i >= 0; i--){
        if(i === 0){
            if(bomb.y=== 0 && (car.x === bomb.x || (Math.abs(car.x - bomb.x) < 2))){
                console.log(' '.repeat(car.x)+explosion)
                score += 1
                if(score === 1){
                    
                    clearInterval(intervalID)
                    velocidad -= 200
                    
                    intervalID = setInterval(render,velocidad)
                    
                }
                if(score === 2){
                    clearInterval(intervalID)
                    velocidad -= 200
                    intervalID = setInterval(render,velocidad)
                }
                if(score === 3){
                    clearInterval(intervalID)
                    velocidad -= 200
                    intervalID = setInterval(render,400)
                }
                if(score === 4){
                    clearInterval(intervalID)
                    scoreH1.textContent = score + ' ---> HAS GANADO'
                    console.clear()
                }
            }
            else if(bomb.y === 0 && bomb.x < car.x){
                console.log(' '.repeat(bomb.x) + bomb.emoji + ' '.repeat(Math.abs(car.x - bomb.x -2)) + car.emoji)
            }else if(bomb.y === 0 && bomb.x > car.x){
                console.log(' '.repeat(car.x) + car.emoji + ' '.repeat(Math.abs(bomb.x - car.x -2)) + bomb.emoji)
            }
            else
            console.log(' '.repeat(car.x)+ car.emoji)
        }
        else if(i === bomb.y){
                console.log(' '.repeat(bomb.x) + bomb.emoji)
        }  
        else
        console.log(' '.repeat(i))
    }
    
    if(bomb.y === 0){
        bomb.y = 9
        bomb.x = Math.round(Math.random() * 10)
    }else{
        bomb.y -= 1
    }

    
   
    
}

setTimeout(function(){
    clearInterval(intervalID)
    console.clear()
    console.log('LOOOOOSE')
},60000)