// primera practica --> Crear divs en bucle que finalicen con el largo de la array de colores
// hay que modificar el css y hacerlo flex / wrap

/*var body = document.querySelector('body')

const color = ['red', 'black', 'blue', 'orange', 'yellow', 'violet', 'gold', 'white', 'green']

for (var i = 0; i < color.length; i++) {
  var element = document.createElement('div')
  body.append(element)
    
  element.style.backgroundColor = color[i]
}*/

// segunda practica --> crear divs en bucle para acabar creando un tablero de ajedrez con los divs
// en posicion absoluta (bucle dentro de bucle)

var body = document.querySelector('body')
var left = 0
var topValue = 0

for (var i = 0; i < 8; i++) {
  for (var j = 0; j < 8; j++) {
    var element = document.createElement('div')

    element.style.left = left + 'px'
    element.style.top = topValue + 'px'

    body.append(element)

    left = left + 50
  }
  
  left = 0
  topValue = topValue + 50
}
