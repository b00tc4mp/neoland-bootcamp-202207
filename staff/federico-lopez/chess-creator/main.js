var body = document.querySelector('body')

var left = 0
var topValue = 0

debugger
for (var i = 1; i < 65; i++) {
    var element = document.createElement('div')

    element.style.left = left + 'px'
    element.style.top = topValue + 'px'

    body.append(element)

    left = left + 50

    if (i % 8 === 0) {
        left = 0
        
        topValue = topValue + 50
    }
}