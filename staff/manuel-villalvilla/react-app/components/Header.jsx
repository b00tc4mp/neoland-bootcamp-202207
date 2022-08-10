function Header(props) {
    const name = props.name

    return <div className="menu-header">
    <div className="div-logout">
        <button className="logout-button">
        <span className="material-symbols-outlined">
            logout
        </span>
        </button>
    </div>
    <div className="saludo">Hola {props.name}!</div>
    <div className="menu">
        <div className="menu-icon"></div>
        <div className="menu-icon"></div>
        <div className="menu-icon"></div>
    </div>
    </div>
}