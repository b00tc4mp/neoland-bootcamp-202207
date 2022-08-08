var body = document.querySelector('body')
//var body = document.getElementsByTagName('body')

/*
const colors = ['red','black','blue','orange','yellow','pink','violet','gold','white','green']

    for (let i = 0; i < 8 ;i++){
        var element = document.createElement('div')
        element.style.backgroundColor = colors[i];
        body.append(element);
        element.innerHTML = 'Div número ' + (i+1);
    }

    */
   
const tablero = document.getElementById("tablero");

    for (let i = 0; i < 8; i++){

        let fila = document.createElement("div");
        fila.classList.add("fila");

        for (let j=0; j<8 ; j++){

            let div= document.createElement("div");
            div.classList.add("casilla");
            fila.appendChild(div);
        }
        tablero.appendChild(fila);
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
