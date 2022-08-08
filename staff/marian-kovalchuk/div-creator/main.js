var body = document.querySelector('body')

/*var element = document.createElement('div')
element.style.width = '50px'
element.style.height = '50px'
element.style.backgroundColor = 'red'
element.style.border.width = '1px'
element.style.border.style = 'solid'
element.style.borderColor ='black'*/
const abc = ['gray', 'green', 'yellow', 'orange', 'blue', "red"]

for (var i = 0; i < abc.length; i++) {
    var element = document.createElement('div')
    element.style.backgroundColor = abc[i]
body.append(element)

}