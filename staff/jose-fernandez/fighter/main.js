console.log("%cFighter %cv0.0", 'color:red; background-color:yellow;','color:blue');
//declare variable fighter and assign with class .fighter of HTML
//declare variable opponent and assign with class .opponent og HTML
var fighter = document.querySelector('.fighter');
var opponent = document.querySelector('.opponent');

//start the figure on the x-axis fighter.x
fighter.x=120;
fighter.y=110;
fighter.width=50;
fighter.score=0;

dx=0;
dy=0;
opponent.x=500;
opponent.y=110;
opponent.width=50;
opponent.score=0

// limitar el rango de movimiento dentro de un area 

// setInterval(function(){
//     fighter.x=dx;
//     if (fighter.x + fighter.with >=120 ) {
//         dx=0;
//         fighter.x=120
//    }
// }


document.onkeydown=function(event){
    //console.log(event.key)
    if(event.key==='ArrowRight'){
        fighter.x = fighter.x + 10;
       
    }
    else if(event.key==='ArrowLeft' && fighter.x > '120px'){
        fighter.x = fighter.x - 10;
       
    }
    
     if(event.key==='ArrowDown'){
         fighter.y = fighter.y + 10;
     }
     else if(event.key==='ArrowUp'){
         fighter.y = fighter.y - 10;
     }
    
    fighter.style.left=fighter.x+'px';
     fighter.style.top=fighter.y+'px';

    if(event.key==='d'){
        opponent.x = opponent.x + 10;
    }
    else if(event.key==='a'){
        opponent.x = opponent.x - 10;
    }
    if(event.key==='s'){
        opponent.y = opponent.y + 10;
    }
    else if(event.key==='w'){
        opponent.y = opponent.y - 10;
    }
    opponent.style.left=opponent.x+'px';
    opponent.style.top=opponent.y+'px';

    // while(event.key==='s' && event.key==='a'){
    //     opponent.y = opponent.y + 10;
    //     opponent.x = opponent.x - 10;
    // }
    

    console.log('fighter position',fighter.x);


    if (fighter.x + fighter.with >=opponent.x ) {
         fighter.score=fighter.score+1;
    }
     console.log('scores',fighter.score,opponent.score);
}