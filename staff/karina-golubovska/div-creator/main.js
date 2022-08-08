var body = document.querySelector('body')

const colors = ['grey', 'green' , 'red']

for (var i = 0; i < colors.length; i++) {
    var element = document.createElement('div')
    element.style.backgroundColor = colors[i]
    body.append(element)
}
