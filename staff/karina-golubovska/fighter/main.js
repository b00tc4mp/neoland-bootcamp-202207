console.log('%cFighter %cv0.0', 'color:red; font-size:30px')

var fighter = document.querySelector('.fighter');
var opponent = document.querySelector('.opponent');

fighter.x = 200
fighter.width = 50
fighter.score = 0
fighter.style.left = fighter.x + 'px'

opponent.x = 500
opponent.width = 50
opponent.score = 0
opponent.style.left = opponent.x + 'px'

document.onkeydown = function(event) {
    
    if (event.key === 'ArrowRight') 
    { fighter.x = fighter.x + 10 }

    else if (event.key === 'ArrowLeft')
     { fighter.x = fighter.x - 10 }
    fighter.style.left = fighter.x + 'px'
    
  
    if (event.key === 'ArrowUp') 
    { opponent.x = opponent.x + 10 }

    else if (event.key === 'ArrowDown')
     { opponent.x = opponent.x - 10 }
    opponent.style.left = opponent.x + 'px'
} 