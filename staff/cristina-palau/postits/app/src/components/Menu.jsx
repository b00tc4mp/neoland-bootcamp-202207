import './Menu.css'
import Loggito from '../utils/loggito'
import withContext from '../utils/withContext'

function Menu({ view, onSettingsClick, onCloseClick, onLogoutClick, context: { toggleTheme } }) {
    const logger = new Loggito('Menu')

    const handleLogoutClick = () => onLogoutClick()
    const handleCloseClick = () => onCloseClick()
    const handleSettingsClick = () => onSettingsClick()

    logger.info('render')

    return <div className="menu-panel">
        <div className="close" onClick={handleCloseClick}></div>
        <ul className="menu-list">
            <li className="menu-panel__option"><button className="settings-button theme-button" onClick={toggleTheme}><span className="material-symbols-outlined">
                palette </span> Theme </button></li>
            {view !== 'settings' && <li className="menu-panel__option"><button className="settings-button profile-button" onClick={handleSettingsClick}><span className="material-symbols-outlined">
                manage_accounts </span>Settings</button></li>}
            <li className="menu-panel__option"><button className="settings-button logout-button" onClick={handleLogoutClick}><span className="material-symbols-outlined">
                logout</span> Logout </button></li>
        </ul>
    </div>
}

export default withContext(Menu)