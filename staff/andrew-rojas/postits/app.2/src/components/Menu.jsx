import './Menu.css'
import IconButton from './IconButton'
import Loggito from '../utils/Loggito'
import Context from '../Context'
import { useContext } from 'react'

function Menu({view, onLogoutClick, onSettingsClick}) {
  const logger = new Loggito('Menu')

  const { toggleTheme } = useContext (Context)

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

export default Menu