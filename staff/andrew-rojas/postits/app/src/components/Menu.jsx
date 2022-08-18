import './Menu.css'
import IconButton from './IconButton'
import Loggito from '../utils/Loggito'

function Menu({view, onLogoutClick, onSettingsClick}) {
  const logger = new Loggito('Menu')

  const handleLogoutClick = () => onLogoutClick()

  const handleSenttingsClick = () => onSettingsClick()

  logger.info('render')

  return <ul className="Menu">
      {view !== 'settings' && <li className="Menu__item">
        <IconButton text="settings" onClick={handleSenttingsClick} />
      </li>}
      <li className="Menu__item">
      <IconButton text="logout" onClick={handleLogoutClick} />
      </li>
    </ul>
}

export default Menu