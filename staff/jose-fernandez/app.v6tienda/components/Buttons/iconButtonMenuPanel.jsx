function IconButtonMenuPanel({onClick,text,nameIcon}){
    return <a className="menu__link" onClick={onClick}>{nameIcon}<span className="material-symbols-outlined">{text}</span></a>
}