//const title = React.createElement('h1', null, 'hola mundo')
const title = <h1>hola mundo</h1>

const fruits = ['apple', 'orange', 'banana', 'lemon', 'tomate']
const motos = ['Kawasaki Ninja', 'Ducatti Panigale', 'Derbi Variant', 'Buell']

function List(props) {  // Design Pattern RORO
    const title = <h2>{props.title}</h2>

    const items = props.array.map(elem => <li>{elem}</li>)
    const list = <ul>{items}</ul>

    return <div>
        {title}
        {list}
    </div>
}

const fruitList = <List title="Fruits" array={fruits} />
const motoList = <List title="Motos" array={motos} />

ReactDOM.createRoot(document.querySelector('#root')).render([title, fruitList, motoList])