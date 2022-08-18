import{ useState } from 'react'
import "./Header.css"

import Loggito from '../utils/loggito'
import 'material-symbols'
import ThemeSelector from './ThemeSelector'

function Header({onProfileClick, onHomeClick, onLogout, name}) {
   
    const logger = new Loggito('Header')

    const [menu, setMenu] = useState('closed')

    const handleMenuClick = () => {
        if (menu !== 'opened'){
            setMenu('opened')
            logger.info('Set Menu', 'opened')
        }
        else if (menu !== 'closed'){
            setMenu('closed')
            logger.info('Set Menu', 'closed')
        }
            
    }

    const handleProfileClick = () => {
        handleMenuClick()
        onProfileClick()
    }

    const handleHomeClick = () => {
        onHomeClick()
    }

    return (<header>
        <span className="homeIcon material-symbols-outlined" onClick={handleHomeClick}>
            home
        </span>
        <h1 id="headerTitle">Hello, {name}</h1>
        <ThemeSelector />
        <div className={(menu === 'closed' && "menuContainer") || (menu === 'opened' && 'menuContainer change')} onClick={handleMenuClick}>
            <div className="menuIcon"></div>
            <div className="menuIcon1"></div>
            <div className="menuIcon2"></div>

            {menu === 'opened' &&
                <div className="dropdownMenu displayBlock">
                    <ul>
                        <li><a href="#" className="profileLink" onClick={handleProfileClick}>Profile</a></li>
                        <li><a href="#" className="settingsLink">Settings</a></li>
                        <li><a href="#" className="logoutLink" onClick={onLogout}>Logout</a></li>
                    </ul>
                </div>
            }

        </div>
    </header>)

}

export default Header