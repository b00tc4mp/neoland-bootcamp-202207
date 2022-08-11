console.log('%cFighter🔥%cv0.0', 'color: red; font-size: 32px;', 'color: dodgerblue;')

// declara variable fighter y le asinga la clase fighter del documento HTML
var fighter = document.querySelector('.fighter')

// declara variable fighter y le asinga la clase fighter del documento HTML
// var score = document.querySelector ('.score')
var oponent = document.querySelector('.oponent') 

var result1 = document.querySelector('.result1')
var result2 = document.querySelector('.result2')

fighter.x = 200
fighter.width = 50
fighter.score = 0
fighter.style.left =
fighter.x + 'px'

oponent.x = 500
oponent.width = 50
oponent.score = 0
oponent.style.left =
oponent.x + 'px'


document.onkeydown = function(event) {


    //fighter

    // console.log(event.key)

    if (event.key === 'ArrowRight') { fighter.x = fighter.x + 10
    }

    else if (event.key === 'ArrowLeft') { fighter.x = fighter.x - 10 
    }

    fighter.style.left = fighter.x + 'px'

    // oponent

    if(event.key === 'd') { oponent.x = oponent.x + 10
    }

    else if (event.key === 'a') { oponent.x = oponent.x - 10 
    }

    oponent.style.left = oponent.x + 'px'


    if (event.key === ' ' && (fighter.x + fighter.width >= oponent.x) && !(fighter.x >= oponent.x + oponent.width))
    { fighter.score = fighter.score + 1 }

    if (event.key === 'k' && (oponent.x + oponent.width >= fighter.x) && !(oponent.x >= fighter.x + fighter.width)) 
    { oponent.score = oponent.score + 1 } 

    result1.innerHTML = fighter.score
    result2.innerHTML = oponent.score

    // console.log('score', fighter.score, oponent.score)
}



