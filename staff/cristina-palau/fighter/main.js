console.log('%cFighter🔥 %cv0.0', 'color:red; font-size:32px', 'color:blue')
// lo que se nos va a ver en la consola

var fighter = document.querySelector('.fighter')
// declara variable fighter y le asinga la clase fighter del documento HTML
var opponent = document.querySelector('.opponent')
// declara variable fighter y le asinga la clase fighter del documento HTML
// var score = document.querySelector ('.score')
var result1 = document.querySelector('.result1')
var result2 = document.querySelector('.result2')

fighter.x = 200
fighter.y = 200
fighter.width = 100
fighter.score = 0
fighter.style.left = fighter.x + 'px'
fighter.style.top = fighter.y + 'px'

opponent.x = 500
opponent.y = 200
opponent.width = 100
opponent.score = 0
opponent.style.left = opponent.x + 'px'
opponent.style.top = opponent.y + 'px'

document.onkeydown = function (event) {
  // fighter
  if (event.key === 'd') {
    fighter.x = fighter.x + 20
  } else if (event.key === 'a') {
    fighter.x = fighter.x - 20
  } else if (event.key === 'w') {
    fighter.y = fighter.y - 20
  } else if (event.key === 's') {
    fighter.y = fighter.y + 20
  }

  fighter.style.left = fighter.x + 'px'
  fighter.style.top = fighter.y + 'px'

  //opponent
  if (event.key === 'ArrowRight') {
    opponent.x = opponent.x + 20
  } else if (event.key === 'ArrowLeft') {
    opponent.x = opponent.x - 20
  } else if (event.key === 'ArrowUp') {
    opponent.y = opponent.y - 20
  } else if (event.key === 'ArrowDown') {
    opponent.y = opponent.y + 20
  }

  opponent.style.left = opponent.x + 'px'
  opponent.style.top = opponent.y + 'px'

  if (event.key === 'h' && (fighter.x + fighter.width >= opponent.x) && !(fighter.x >= opponent.x + opponent.width)) {
    fighter.score = fighter.score + 1
  }

  if (event.key === ' ' && (opponent.x + opponent.width >= fighter.x) && !(opponent.x >= fighter.x + fighter.width)) {
    opponent.score = opponent.score + 1
  }
  result1.innerHTML = fighter.score
  result2.innerHTML = opponent.score
  // console.log('scores', fighter.score, opponent.score)
}


//     if (fighter.x + fighter.width >= opponent.x)
//         fighter.score = fighter.score + 1
// console.log('scores', fighter.score, opponent.score)
// }

// document.onkeydown = function (event) {
//     // console.log(event.key) detecta las tecla que presionas y la devuelve en consola
//     if (event.key === 'd') {
//         opponent.x = opponent.x + 10

//     } else if (event.key === 'a') {
//         opponent.x = opponent.x - 10
//     }

//     opponent.style.left = opponent.x + 'px'
// }