console.log('%cFighter🔥%cv0.0', 'color: red; font-size: 32px;', 'color: dodgerblue;')

var fighter = document.querySelector('.fighter')
// Declare 'fighter' variable and assign to it the HTML element with attribute class 'fighter'

var oponent = document.querySelector('.oponent')
// Declara una variable 'oponent' le asignamos el valor que resulta de buscar dentro del document un elemento HTML cuyo atributo clase sea igual a "oponent"

fighter.x = 200
fighter.y = 0

// Creamos la propiedad 'x' del elemento HTML 'fighter' le asignamos el valor de 200

fighter.width = 50
fighter.score = 0
// Creamos la propiedad 'score' del elemento HTML referenciado en la variable 'fighter' y le asigamos un valor de 0

fighter.style.left = fighter.x + 'px'
fighter.style.top = fighter.y + 'px'

// A la propiedad left, de la propiedad style, del elemento HTML 'fighter' le asignamos el valor que resultad de:
// concatenar el valor de la propiedad 'x' de la variable 'fighter' y el string 'px'

oponent.x = 500
oponent.width = 50
oponent.score = 0
oponent.style.left = oponent.x + 'px'

document.onkeydown = function(event) {
    // fighter

    if (event.key === 'ArrowRight') {
        fighter.x = fighter.x + 10
    } else if (event.key === 'ArrowLeft') {
        fighter.x = fighter.x - 10
    } else if (event.key === 'ArrowUp') {
        fighter.y = fighter.y - 10
    } else if (event.key === 'ArrowDown') {
        fighter.y = fighter.y + 10
    }

    fighter.style.left = fighter.x + 'px'
    fighter.style.top = fighter.y + 'px'


    // oponent
    
    if (event.key === 'd') {
        oponent.x = oponent.x + 10
    } else if (event.key === 'a') {
        oponent.x = oponent.x - 10
    }

    oponent.style.left = oponent.x + 'px'
}