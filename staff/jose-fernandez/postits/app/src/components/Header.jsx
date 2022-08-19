//import para modulos
import {useState} from 'react'
// import './Header.css'
import Menu from './Menu'
import IconButton from './Buttons/IconButton'
import Loggito from '../utils/Loggito'


function Header({ name, onLogoutClick, onSettingsClick,view:viewHome,toggleTheme}) {
    const logger = new Loggito('Header')
    const [view, setView] = useState(null)
    // [null, f(){}]

    const handleMenuClick = () => {
        setView('menu')

        logger.debug('setView','menu')
    }

    const handleCloseClick = () => {
        setView(null)

        logger.debug('setView',null)
    }

    const handleSettingsClick = () => {
        setView(null)

        logger.debug('setView',null)
        
        onSettingsClick()
    }

    logger.info('return')

    return <header className="header_home">
        <div className="cont__header">
            <div className="link_home" >
            <img className="img img-home " src="https://i.postimg.cc/ZY1nHGSz/logo-Luanna.png" alt="" />
            {/* {{toggleTheme}=== 'light'? 
                <img className="img img-home " src="https://i.postimg.cc/ZY1nHGSz/logo-Luanna.png" alt="" />
                :
                <img className="img img-home " src="https://i.postimg.cc/mZqYhbGW/luanna-Logo.png" alt="" />} */}
            </div>
            <h1 className="messageTitle">Hello {name} !</h1>

            <div className="btn-menClo">
                {view === null && <IconButton addClass="btn-menu" text="menu" onClick={handleMenuClick} />}
                {view === "menu" && <IconButton addClass="btn-menu" text="close" onClick={handleCloseClick} />}
            </div>
        </div>
        {view === "menu" && <Menu onLogoutClick={onLogoutClick} onSettingsClick={handleSettingsClick} view={viewHome} />}
    </header>
}

export default Header
