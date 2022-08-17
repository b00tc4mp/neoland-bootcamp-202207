const { useState } = React

function Header({ name, onSettingsClick, onLogoutClick, view: viewHome, onFeedback}) {

    const logger = new Loggito('Header')

    const [view, setView] = useState(null)

    const handleMenuClick = () => {
        setView('menu')

        logger.debug('setView', 'menu')
    }

    const handleCloseClick = () => {

        setView(null)

        logger.debug('setView',' null')
    }


    const handleSettingsClick = () => {

        setView(null)

        logger.debug('setView', 'null')

        onSettingsClick()
    }


    return <div className="header">
        <h1 className="greeting">Hey, {name}!</h1>
        {view === null &&
            <button className="burger" onClick={handleMenuClick} >
                <div className="burgerline"></div>
                <div className="burgerline"></div>
                <div className="burgerline"></div>
            </button>}

        {view === 'menu' && <Menu onCloseClick={handleCloseClick} onLogoutClick={onLogoutClick} onSettingsClick={handleSettingsClick} view={viewHome} />}
    </div >

}