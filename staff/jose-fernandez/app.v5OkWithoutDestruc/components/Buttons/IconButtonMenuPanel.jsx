function IconButtonMenuPanel(props){
    return <a className="menu__link" onClick={props.onClick}><span className="material-symbols-outlined">{props.text}</span>{props.nameIcon}</a>
}