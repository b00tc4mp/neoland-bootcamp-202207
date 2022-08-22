

var body = document.querySelector('body')

var counter = 0
var topValue = 0
const colors = ['red', 'black', 'blue', 'orange', 'yellow', 'pink', 'violet', 'gold']

for (var i = 0;  i< 8; i++) {
    var left = 0
    for (var j = 0; j < 8; j++) {
        var element = document.createElement('div')

        element.style.left = left + 'px'
        element.style.top = topValue + 'px'

        if (counter % 2  !== 0)
    element.style.backgroundColor = colors[i]

        body.append(element)

        left+=50

        counter ++

 }
    left = 0

   topValue += 50

   counter ++
}




    
