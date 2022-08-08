var body = document.querySelector('body')
// var body = document.getElementsByTagName('body')

var topValue = 0

for (var j = 0; j < 8; j++) {
    var left = 0
    for (var j = 0; j < 8; j++) {
        var element = document.createElement('div')
 
        element.style.left = left + 'px'
        element.style.top = topValue + 'px'

        body.append(element)
        
        left += 50
    }
    topValue += 50

    left = 0
}