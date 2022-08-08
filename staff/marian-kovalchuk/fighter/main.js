console.log('%cFighter🔥%cv0.0', 'color: red; font-size: 32px;', 'color: dodgerblue;')

var fighter = document.querySelector('.fighter')
//Declare 'fighter' variable and assing to it the HTML element with attribute class 'fighter'
var oponent = document.querySelector('.oponent')

fighter.x = 200
fighter.width = 5
fighter.score = 0
fighter.style.left = fighter.x + 'px'

oponent.x = 500
oponent.width = 50
oponent.score = 0
oponent.style.left = oponent.x + 'px'

document.onkeydown = function(event) {
    // fighter

    if (event.key === 'ArrowRight') {
        fighter.x = fighter.x + 10
    } else if (event.key === 'ArrowLeft') 
        fighter.x = fighter.x - 10
    
    fighter.style.left = fighter.x + 'px'

        if (event.key === 'ArrowUp') {
            oponent.x = oponent.x + 10
        } else if (event.key === 'ArrowDown') {
            oponent.x = oponent.x - 10
        }
    
        oponent.style.left = oponent.x + 'px'
    }

    // oponent
   
