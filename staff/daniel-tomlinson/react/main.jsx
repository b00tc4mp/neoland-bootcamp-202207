const title = <h1>hello world</h1>

const fruits = ["apple", "orange", "banana", "lemon", "tomato"]
const motos = ["kawasaki ninjs", "triumph speed triple", "africa twin"]

function createList(props) {
    const title = <h2>{props.title}</h2>

    // reduced
    // const array = props.array
    // const items = array.map(elem => <li>{elem}</li>)
    
    //reduced to this
    const items = props.array.map(elem => <li>{elem}</li>)



    const list = <ul>{items}</ul>

    // return list
    return <div>
        {title}
        {list}
    </div>
}

// const list = List(fruits)

//props of list = props.title, props.array, props.hello
// const list = <List title="Fruits" array={fruits} hello="Pepito" />

const list = createList(fruits)

// props

ReactDOM.createRoot(document.querySelector('#root')).render([title, list])