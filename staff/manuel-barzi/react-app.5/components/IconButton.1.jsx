function IconButton(props) {
    return <button className="transparent-button" onClick={props.onClick}><span className="material-symbols-outlined">{props.text}</span></button>
}