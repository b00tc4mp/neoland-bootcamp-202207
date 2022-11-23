import './Menu.css'
import IconButton from './IconButton'
import Loggito from '../utils/Loggito'
import withContext from '../utils/withContext'
import { useLocation, useNavigate } from 'react-router-dom'

function Menu({onLogoutClick, onSettingsClick, onFavoritesClick, context: { toggleTheme} }) {
  const logger = new Loggito("Menu");


  const location = useLocation()

  const navigate= useNavigate()

  const handleLogoutClick = () => onLogoutClick();

  const handleSettingsClick = () => onSettingsClick();

   const handleFavoritesClick =() => onFavoritesClick();
 //   const handleSearchClick = () => onSearchClick();

  logger.info("return");

  return  <ul className="Menu container container--row">
          <li className="Menu__item">
             <IconButton text="arrow_back" onClick={() => navigate(-1)} />
        </li>

        {location.pathname !== "settings" && <li className="Menu__item">
             <IconButton text="settings" onClick={handleSettingsClick} />
          </li> }
          <li className="Menu__item">
             <IconButton text="light" onClick={toggleTheme} />
        </li>
          <li className="Menu__item">
             <IconButton text="logout" onClick={handleLogoutClick} />
        </li>
        {location.pathname !== " FavList" && <li className="Menu__item">
             <IconButton text="favorites" onClick={handleFavoritesClick} />
          </li> }

        {/* <li className='FavList'>
          <IconButton text="favorites" onFavoritesClick={handleFavoritesClick}  />
        </li> */}
        {/* <li className="Menu__item">
             <IconButton text="arrow_back" onClick={handleBackClick} />
        </li> */}
      </ul>
}

export default withContext (Menu)

   
     