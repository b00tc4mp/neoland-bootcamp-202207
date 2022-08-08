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
