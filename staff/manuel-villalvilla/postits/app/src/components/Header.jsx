import { useState } from 'react'
import Menu from './Menu'
import Logger from '../utils/logger'
import withContext from '../utils/withContext'

export default withContext(function Header({ name, onSettingsButtonClick, onNotesButtonClick, context: {handleLogoutButtonClick} }) {
    const logger = new Logger(Header.name)

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

    logger.info('return')

    return <>
    <div className="menu-header">
        <div className="div-logout">
            <button className="logout-button" onClick={handleLogoutButtonClick}>
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
})