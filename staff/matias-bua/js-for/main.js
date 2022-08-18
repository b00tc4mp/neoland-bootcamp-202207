var body = document.querySelector('body')
// var body = document.getElementsByTagName('body')


const colorsx = ['red', 'black', 'blue', 'orange', 'yellow', 'pink', 'violet', 'gold', 'white', 'green']

for (var i = 0; i <10; i++) {
    var element = document.createElement('div')

    element.style.backgroundColor = colorsx[i]
    body.append(element)
}

