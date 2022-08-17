const {useState} = React
function Header({ name, onLogoutClick, onSettingsClick,view:viewHome }) {
    const logger = new Loggito('Header')
    const [view, setView] = useState(null)

    const handleMenuClick = () => setView('menu')

    const handleCloseClick = () => {
        setView(null)
    }

    const handleSettingsClick = () => {
        setView(null)
        onSettingsClick()
    }

    logger.info('render')

    return <header className="header_home">
        <div className="cont__header">
            <div className="link_home" >
                <img className="img img-home " src="https://i.postimg.cc/ZY1nHGSz/logo-Luanna.png" alt="" />
            </div>
            <h1 className="messageTitle">Hello {name} !</h1>

            <div className="btn-menClo">
                {view === null && <IconButtonHeader text="menu" onClick={handleMenuClick} />}
                {view === "menu" && <IconButtonHeader text="close" onClick={handleCloseClick} />}
            </div>
        </div>
        {view === "menu" && <Menu onLogoutClick={onLogoutClick} onSettingsClick={handleSettingsClick} view={viewHome} />}
    </header>
}
