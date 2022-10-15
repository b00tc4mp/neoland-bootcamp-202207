import './Menu.css'
import IconButton from './IconButton'
import Loggito from '../utils/Loggito'
import withContext from '../utils/withContext'

function Menu({ view, onLogoutClick, onSettingsClick, context: { toggleTheme } }) {
    const logger = new Loggito('Menu')

    const handleLogoutClick = () => onLogoutClick()

    const handleSettingsClick = () => onSettingsClick()

    logger.info('return')

    return <div className="Menu">
        <ul className="Menu-panel">
            {view !== 'settings' && <li className="Menu__item">
                <IconButton text="settings" onClick={handleSettingsClick}/>
            </li>}
            <li className="Menu__item">
                <IconButton text="light" onClick={toggleTheme} />
            </li>
            <li className="Menu__item">
                <IconButton text="logout" onClick={handleLogoutClick} />
            </li>
        </ul>
    </div>
}

export default withContext(Menu)