import IconButtonMenuPanel from './Buttons/iconButtonMenuPanel'
import Loggito from '../utils/Loggito'

function Menu() {
    const logger = new Loggito('Menu')


    return <nav className="menu-panel nav-home" id="nav-home">
        <ul className="menu-panel__list menu-home">
            <li className="menu-item item_settings"><IconButtonMenuPanel text='settings' nameIcon='Settings' onClick={handleSettingsClick} /></li>
            {/* {view !== 'settings' && <li className="menu-item item_settings"><IconButtonMenuPanel text='settings' nameIcon='Settings' onClick={handleSettingsClick}/></li>}
        {view !== 'design' && <li className="menu-item item_design"><IconButtonMenuPanel text='brush' nameIcon='Design'/></li>}
        {view !== 'language' && <li className="menu-item item_language"><IconButtonMenuPanel text='language' nameIcon='Language'/></li>}
        {<li className="menu-item item_logout"><IconButtonMenuPanel text='logout' nameIcon='Logout' onClick={handleLogoutClick}/></li>} */}
        </ul>
    </nav>
}
export default Menu