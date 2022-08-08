var body = document.querySelector('body')
// var body = document.getElementsByTagName('body')

var topValue = 0
var counter = 0

for (var j = 0; j < 8; j++) {
    var left = 0
    for (var j = 0; j < 8; j++) {
        var element = document.createElement('div')
 
        element.style.left = left + 'px'
        element.style.top = topValue + 'px'

        if (counter % 2 !== 0)
            element.style.backgroundColor = 'brown'

        body.append(element)
        
        left += 50

        counter++
    }
    topValue += 50

    left = 0

    counter++
}