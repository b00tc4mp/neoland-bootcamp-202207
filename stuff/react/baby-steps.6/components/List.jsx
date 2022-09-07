function List(props) {
    const title = <h2>{props.title}</h2>

    const items = props.array.map(elem => <li>{elem}</li>)
    const list = <ul>{items}</ul>

    return <div>
        {title}
        {list}
    </div>
}