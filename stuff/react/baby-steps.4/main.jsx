//const title = React.createElement('h1', null, 'hola mundo')
const title = <h1>hola mundo</h1>

const fruits = ['apple', 'orange', 'banana', 'lemon', 'tomate']

function createList(array) {
    const items = array.map(elem => <li>{elem}</li>)
    const list = <ul>{items}</ul>

    return list
}

const list = createList(fruits)

ReactDOM.createRoot(document.querySelector('#root')).render([title, list])