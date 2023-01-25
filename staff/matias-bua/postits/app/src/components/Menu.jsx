import './Menu.css'
import IconButton from './IconButton'
import Loggito from '../utils/Loggito'
import withContext from '../utils/withContext'

function Menu({view, onLogoutClick,onSettingsClick,text, context: { toggleTheme }}) {

    const logger = new Loggito ('Menu')

    const handleLogoutClick = () => onLogoutClick()

    const handleSettingsClick = () => onSettingsClick()

    logger.info ('return')

    return <ul className="MenuContainerHeader container--row">
            {view !== 'settings' && <li className="Menu__item">
            <IconButton text="settings" onClick={handleSettingsClick}/>
            Settings
            </li>}
            
            <li className="Menu__item">
            <IconButton text="light" onClick={toggleTheme} />
            Themes
            </li>

            <li className="Menu__item"> 
            <IconButton text="logout" onClick={handleLogoutClick} />
            Logout
            </li>
        </ul>
}

export default withContext(Menu)