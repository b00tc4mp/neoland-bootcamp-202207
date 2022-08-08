// var body = document.querySelector('body')
// // var body = document.getElementsByTagName('body')

// const colors = ['red', 'black', 'blue', 'orange', 'yellow', 'pink', 'violet', 'gold', 'white', 'green']
// debugger
// for (var i = 0; i < colors.length; i++) {
//     var element = document.createElement('div')

//     element.style.backgroundColor = colors[i]
//     body.append(element)
// }

// var body = document.querySelector('body')

// for (var i = 0; i < 8 ; i++){
//     var element = document.createElement('div')

//     element.style.backgroundColor = 'white'
//     element.style.position = ''
//     element.style.width = '50px'
//     element.style.height = '50px'
//     element.style.border = '1px solid black'
//     body.append(element)
// }

// for (var i = 0; i < 8 ; i++){
//     var element = document.createElement('div')

//     element.style.backgroundColor = 'red'
//     element.style.position = 'absolute'
//     element.style.width = '50px'
//     element.style.height = '50px'
//     element.style.border = '1px solid black'
//     element.style.top = '50px'
//     element.style.left = '0px'
//     body.append(element)
// }


var body = document.querySelector('body')
var left= 0
var topValue = 0


for (var i= 0; i < 8; i++) {  
    for (var j = 0; j < 8; j++) {
        var element = document.createElement('div')

        element.style.left = left + 'px' 
        element.style.top= topValue + 'px'

        body.append(element)

      

        left = left + 50

    }
    
    left= 0

    topValue = topValue + 50

}