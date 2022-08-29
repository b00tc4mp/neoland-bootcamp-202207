function IconButtonMenuPanel({onClick,text,nameIcon}){
    return <a className="menu__link" onClick={onClick}><span className="material-symbols-outlined">{text}</span>{nameIcon}</a>
}