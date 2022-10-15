import './Menu.css'
import IconButton from './IconButton'
import Loggito from '../utils/Loggito'

function Menu({ view, onLogoutClick, onSettingsClick }) {
    const logger = new Loggito('Menu')

    const handleLogoutClick = () => onLogoutClick()

    const handleSettingsClick = () => onSettingsClick()

    logger.info('return')

    return <div className="Menu">
        <ul className="Menu-panel">
            {view !== 'settings' && <li className="menu-panel__list-item-settings">
                <IconButton text="settings" onClick={handleSettingsClick}/>
            </li>}
            <li className="menu-panel__list-item-logout">
                <IconButton text="logout" onClick={handleLogoutClick} />
            </li>
        </ul>
    </div>
}

export default Menu