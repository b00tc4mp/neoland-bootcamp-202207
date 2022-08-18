console.log('%cFighter🔥%cv0.0', 'color: red; font-size: 32px;', 'color: dodgerblue;')


var fighter = document.querySelector('.fighter')
var oponent = document.querySelector('.oponent')

var score = document.querySelector('score1')
var score = document.querySelector('score2')


fighter.x = 200
fighter.y = 200
fighter.width = 100
fighter.score = 0
fighter.style.left = fighter.x + 'px'
fighter.style.up = fighter.y + 'px'

oponent.x = 800
oponent.y = 800
oponent.width = 100
oponent.score = 0
oponent.style.left = oponent.x + 'px'
oponent.style.up = oponent.y + 'px'

document.onkeydown = function (Event) {
    console.log(Event.key)

    if (Event.key === 'ArrowRight') {

        fighter.x = fighter.x + 5
    } else if (Event.key === 'ArrowLeft') {
        fighter.x = fighter.x -5
    } else if (Event.key === 'ArrowUp') {
        fighter.y = fighter.y -5
    } else if (Event.key === 'ArrowDown') {
        fighter.y = fighter.y +5
    }

    fighter.style.left = fighter.x + 'px'
    fighter.style.up = fighter.y + 'px'
}

    
//     else if(Event.key === 'd') {
//         oponent.x = oponent.x + 5
//     } else if (Event.key === 'a') {
//         oponent.x = oponent.x -5
//     }
//         oponent.style.left = oponent.x + 'px'
// }
 