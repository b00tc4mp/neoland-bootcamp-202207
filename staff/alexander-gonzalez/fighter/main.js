console.log('%cfighter %cv0.0','color:red; font-size:30px','color: blue;' )

var fighter = document.querySelector('.fighter');
// Declare 'fighter' variable and assign to it the HTML element with class 'fighter'
var oponent = document.querySelector('.oponent')
//declara variable 'oponent' le asignamos el valor que resulta de buscar el documento html 'oponent'
fighter.x = 100
//creamos la propiedad'x'y le asignamos un valor 100
fighter.widht = 50
fighter.score = 0
fighter.y=100
//creamos propiedad score de HTML referenciado a Fighter y asignamos valor
fighter.style.left = fighter.x + 'px'
//A la propiedad left, de la propiedad style, del elemento HtML 'fighter' le asignamos el valor:
//concatenar el valor de la propiedad 'x' de la variable 'fighter' y el string 'px'
fighter.style.top= fighter.y + 'px'

oponent.x = 800
oponent.y= 100
oponent.widht = 50
oponent.score = 0
oponent.style.left = oponent.x + 'px'
oponent.style.top = oponent.y + 'px'



document.onkeydown = function(event){
   /* console.log(event.key)*/


if(event.key === 's')
{
        fighter.x = fighter.x +20
    }
    else if(event.key === 'a')
     {
        fighter.x = fighter.x-20
      }
      else if(event.key === 'w')
     {
        fighter.y = fighter.y-20
      }
      else if(event.key === 'z')
     {
        fighter.y = fighter.y+20
      }

     fighter.style.left = fighter.x + 'px'
     
     console.log('fighter position', fighter.x)

     fighter.style.top = fighter.y + 'px'
     
     console.log('fighter position', fighter.y)




     if(event.key === 'ArrowRight')
{
        oponent.x = oponent.x +10
    }
    else if(event.key === 'ArrowLeft')
     {
        oponent.x = oponent.x-10
      }
      else if(event.key === 'ArrowDown')
     {
        oponent.y = oponent.y+10
      }
      else if(event.key === 'ArrowUp')
     {
        oponent.y = oponent.y-10
      }

     oponent.style.left = oponent.x + 'px'
     console.log('oponent position', oponent.x)
     oponent.style.top = oponent.y + 'px'
     console.log('oponent position', oponent.y)
     
    }



    