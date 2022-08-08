//const title = React.createElement('h1', null, 'hola mundo')
const title = <h1>hola mundo</h1>

const fruits = ['apple', 'orange', 'banana', 'lemon', 'tomate']

//const items = fruits.map(fruit => React.createElement('li', null, fruit))
const items = fruits.map(fruit => <li>{fruit}</li>)
//const list = React.createElement('ul', null, items)
const list = <ul>{items}</ul>


ReactDOM.createRoot(document.querySelector('#root')).render([title, list])