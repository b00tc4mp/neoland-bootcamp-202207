import './Menu.css'
import IconButton from './IconButton'
import Loggito from '../utils/Loggito'
import withContext from '../utils/withContext'

function Menu({view, onLogoutClick, onSettingsClick, context: { toggleTheme } }) {
  const logger = new Loggito('Menu')

  const handleLogoutClick = () => onLogoutClick()

  const handleSenttingsClick = () => onSettingsClick()

  logger.info('return')

  return <ul className="Menu container container--row">
      {view !== 'settings' && <li className="Menu__item">
        <IconButton text="settings" onClick={handleSenttingsClick} />
      </li>}
      <li className="Menu__item">
      <IconButton text="light" onClick={toggleTheme} />
      </li>
      <li className="Menu__item">
      <IconButton text="logout" onClick={handleLogoutClick} />
      </li>
    </ul>
}

export default withContext(Menu)