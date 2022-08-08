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
    x: 2 * Math.round(Math.random() * spaceAvailable / 2), // multiplicamos por 2 y luego dividimos por dos para que de par
    y: 9                                                   // (si da par, es la forma de que los emojis coincidan)
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
let speed = 1000
let intervalId = setInterval(render, speed)// render ?

function render() { // funcion render??
    console.clear()

    console.log(`ACTUAL SCORE  ${score}`)

    for (let i = 9; i >= 0; i--) {
        if (i === 0)
            if (heart.y === 0 && ((car.x === heart.x) || Math.abs(car.x - heart.x) < 2)) {
                console.log('😘')
                score++ 
                speed-= 200 
                clearInterval(intervalId)
                intervalId = setInterval(render, speed)

                



            } else if(heart.y === 0 && heart.x > car.x) {
                console.log(' '.repeat(car.x) + car.emoji + ' '.repeat(heart.x - car.x -2) + heart.emoji)

            } else if(heart.y === 0 && heart.x < car.x) {
                console.log(' '.repeat(heart.x) + heart.emoji + ' '.repeat(car.x - heart.x -2) + car.emoji)
              //en ambos casos restamos 2 para que los espacios de los emojis coincidan y no se separen.
              //usamos un -2  para quitarle esos espacios que ocuoan cada emoji...
            } else
                console.log(' '.repeat(car.x) + car.emoji)

        else if (i === heart.y)
            console.log(' '.repeat(heart.x) + heart.emoji)

        else
        
            console.log(i)
    }

    if (score === 3) {
        clearInterval(intervalId)// limpiamos los intervalos cada vez que el emoji toca el otro emoji
        //asi una vez suceda, añadimos "clearinterval"
       

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
 let intervaliue = setInterval(render, speed)

 setTimeout(function(){
  clearInterval(intervaliue)
  console.log('LOOOSE')
 },6000)




/*const score = 0;

const car = {
  emoji: "🚔️",
  x: 0,
  y: 0,
};

const heart = {
  emoji: "❤️",
  x: Math.round(Math.random() * 10),
  y: 9,
};

document.onkeydown = (event) => {
  switch (event.key) {
    case "ArrowRight":
      if (car.x < 10) car.x += 1;

      break;
    case "ArrowLeft":
      if (car.x > 0) car.x -= 1;
      break;
  }
};

setInterval(render, 500);
function render() {
  console.clear();
  // while(i < 8){
  for (i = 9; i >= 0; i--) {
    if (i === 0)
      if (heart.y === 0 && car.x === heart.x) {
        console.log("💥");
      } else console.log(" ".repeat(car.x) + car.emoji);
    else if (i === heart.y) console.log(" ".repeat(heart.x) + heart.emoji);
    else console.log(i);
  }

  updateHeart();
}

function updateHeart() {
  if (heart.y === 0) {
    heart.y = 9;
    heart.x = Math.round(Math.random() * 10);
  } else heart.y -= 1;
}*/
