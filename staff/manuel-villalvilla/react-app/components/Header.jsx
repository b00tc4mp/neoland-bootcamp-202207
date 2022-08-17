const { useState } = React

function Header({ name, onLogoutButtonClick, onSettingsButtonClick, onNotesButtonClick }) {
    const logger = new Logger('header')

    logger.info('constructor')

    const [menuShow, setMenuShow] = useState(false) // [false, f () {}]

    const handleMenuButtonClick = () => {
        if (menuShow)
            setMenuShow(false)
        else
            setMenuShow(true)
    }

    const handleSettingsButtonClick = () => {
        handleMenuButtonClick()
        onSettingsButtonClick()
    }

    const handleNotesButtonClick = () => {
        handleMenuButtonClick()
        onNotesButtonClick()
    }

    logger.info('render')

    return <>
    <div className="menu-header">
        <div className="div-logout">
            <button className="logout-button" onClick={onLogoutButtonClick}>
            <span className="material-symbols-outlined">
                logout
            </span>
            </button>
        </div>
        <div className="saludo">Hi {name}!</div>
        <div className={menuShow ? "menu rotate" : "menu"} onClick={handleMenuButtonClick}>
            <div className="menu-icon" />
            <div className="menu-icon" />
            <div className="menu-icon" />
        </div>
    </div>
    
    <Menu show={menuShow} onSettingsButtonClick={handleSettingsButtonClick} onNotesButtonClick={handleNotesButtonClick}/>
    </>
}