import './Menu.css'
import Loggito from '../utils/loggito'

function Menu({view, onSettingsClick, onCloseClick, onLogoutClick}) {
    const logger = new Loggito('Menu')
    
    const handleLogoutClick = () => onLogoutClick()
    const handleCloseClick = () => onCloseClick()
    const handleSettingsClick = () => onSettingsClick()

    logger.info('render')

return <div className="menu-panel">
    <div className="close" onClick={handleCloseClick}></div>
    <ul className="menu-list">
        {view !== 'settings' && <li className="menu-panel__settings"><button className="settings-button profile-button" onClick={handleSettingsClick}><span className="material-symbols-outlined">
manage_accounts </span>settings</button></li>}
        <li className="menu-panel__logout"><button className="settings-button logout-button" onClick={handleLogoutClick}><span className="material-symbols-outlined">
logout</span> logout </button></li>
    </ul>
</div>
}

export default Menu