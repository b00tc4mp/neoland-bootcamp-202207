const title = React.createElement('h1', null, 'hola mundo')

const fruits = ['apple', 'orange', 'banana', 'lemon', 'tomate']

const items = fruits.map(fruit => React.createElement('li', null, fruit))
const list = React.createElement('ul', null, items)


ReactDOM.createRoot(document.querySelector('#root')).render([title, fruitList])
