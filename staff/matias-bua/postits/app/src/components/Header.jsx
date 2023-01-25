import { useState } from 'react' //Se usa para decir que linkeamos react y lo vamos a usar, ( hay que llamarlo )
import './Header.css'
import Menu from './Menu'
import IconButton from './IconButton'
import Loggito from '../utils/Loggito'


function Header ({ name, onLogoutClick, onSettingsClick, view: viewHome}) {

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

    return <header className="Header-container">
        <div className="container container--row container--distributed">
            <h1 className="title">Hello, {name}!</h1>
            
            { view === null && <IconButton text="menu" onClick={handleMenuClick} />}
            { view === 'menu' && <IconButton text="close" onClick={handleCloseClick} />}
        </div>

        { view === 'menu' && <Menu onLogoutClick={onLogoutClick} onSettingsClick={handleSettingsClick} view={viewHome} />}
    </header>
    }

    export default Header
