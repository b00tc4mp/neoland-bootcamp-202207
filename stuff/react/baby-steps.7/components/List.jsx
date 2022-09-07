function List(props) {
    const title = <h2>{props.title}</h2>

    const items = props.items.map(elem => <li>{elem}</li> /* React.createElement('li', null, elem) */)
    const list = <ul>{items}</ul> // React.createElement('ul', null, items)

    return <div>
        {title}
        {list}
    </div>
    // React.createElement('div', null, [title, list])
}