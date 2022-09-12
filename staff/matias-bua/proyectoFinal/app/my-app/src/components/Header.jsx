import { useState } from 'react' //Se usa para decir que linkeamos react y lo vamos a usar, ( hay que llamarlo )
import './Header.css'
import IconButton from './IconButton'
import Loggito from '../utils/Loggito'
import MenuHeader from './MenuHeader'
import Search from './Search'


function Header ({ onLogoutClick, onSettingsClick, view: viewHome, onSearch}) {

    const logger = new Loggito('header')

    const [view, setView] = useState (null)
        //this.state = { view: null }  <--- esta es la forma sin hook, para trabajar con react native//


    const handleMenuClick = () => {
        setView('menu')

        logger.debug('setView', 'menu')
    }

    const handleCloseClick = () =>  {
        setView (null)

        logger.debug('setView', null)
    }

    const handleSettingsClick = () => {
       setView(null)

       logger.debug('setView',null)

       onSettingsClick()
    }

    logger.info('render')

    return <header className="HeaderContainer">
        <div className="HeaderMenuContainer">
            {view !== 'menu' && <Search onQuery={onSearch}/>}
            { view === null && <IconButton text="menu" onClick={handleMenuClick} />}
            { view === 'menu' && <IconButton text="close" onClick={handleCloseClick} />}
        </div>

        { view === 'menu' && <MenuHeader onLogoutClick={onLogoutClick} onSettingsClick={handleSettingsClick} view={viewHome} />}
    </header>
    }

    export default Header
