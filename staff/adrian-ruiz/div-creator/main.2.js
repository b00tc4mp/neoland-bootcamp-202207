var body = document.querySelector('body')

var left = 0;
var topValue = 0;
var count = 0;

    for (let i = 0; i < 8; i++){
        for (var j = 0; j < 8; j++){
            let div= document.createElement("div");
            

            div.style.left = left + 'px';
            div.style.top = topValue + 'px';

            body.append(div);
            if( count % 2 === 0){
                div.style.backgroundColor = 'black';
            }
            left = left + 50;  
            count++;
        }

        left = 0;
        count++;
        topValue = topValue + 50;
    }

var peon = document.createElement("peon");
peon.classList.add("peon");
var peonLeft = 212.5;
var peonTop = 212.5;
peon.style.top = peonTop + 'px';
peon.style.left = peonLeft + 'px';
body.append(peon);

var printedPeon = document.getElementsByClassName("peon");

// Seleccionar botones

var buttonIzq = document.getElementById("izquierda");
var buttonDch = document.getElementById("derecha");
var buttonUp = document.getElementById("arriba");
var buttonDwn = document.getElementById("abajo");

// Listeners click 
buttonIzq.addEventListener("click", () =>{
    moverPeon("izquierda");
});

buttonDch.addEventListener("click", () =>{
    moverPeon("derecha");
});
buttonUp.addEventListener("click", () =>{
    moverPeon("arriba");
});
buttonDwn.addEventListener("click", () =>{
    moverPeon("abajo");
});


function moverPeon(direccion){
    if(direccion === 'izquierda' && !(peonLeft < 50)){
        peonLeft = peonLeft - 50;
        peon.style.left = peonLeft + 'px';
    }
    else if(direccion === 'derecha' && !(peonLeft > 350)){
            peonLeft = peonLeft + 50;
            peon.style.left = peonLeft + 'px';
    }
    else if(direccion === 'arriba' && !(peonTop < 50)){
        peonTop = peonTop - 50;
        peon.style.top = peonTop + 'px';
    }
    else if(direccion === 'abajo' && !(peonTop > 350)){
        peonTop = peonTop + 50;
        peon.style.top = peonTop + 'px';
    }
}

/* 

 -- Opción creando una función para crear el Div --

for (let i = 0; i < 10;i++){
    crearDiv(i);
}

function crearDiv(i){
    var element = document.createElement('div')
    element.style.backgroundColor = colors[i];
    body.append(element);
    element.innerHTML = 'Div número ' + (i+1);
}

*/
