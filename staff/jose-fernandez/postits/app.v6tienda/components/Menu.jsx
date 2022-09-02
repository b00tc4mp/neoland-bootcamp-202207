function Menu({view,onLogoutClick,onSettingsClick}){
    const logger = new Loggito('Menu')
    
    const handleSettingsClick = () => {
        onSettingsClick()
    }

    // const handleLogoutClick = () => onLogoutClick()
    
    logger.info('render')

    // arreglar menupanel settings se muestra en settings
    return <nav className="menu-panel nav-home" id="nav-home">
    <ul className="menu-panel__list menu-home">
        {view !== 'settings' && <li className="menu-item"><IconButtonMenuPanel text='chevron_right' nameIcon='Hombre' onClick={handleSettingsClick}/></li>}
        {view !== 'design' && <li className="menu-item"><IconButtonMenuPanel text='chevron_right' nameIcon='Mujer'/></li>}
        {view !== 'language' && <li className="menu-item"><IconButtonMenuPanel text='chevron_right' nameIcon='Niños'/></li>}
        {/* {<li className="menu-item item_logout"><IconButtonMenuPanel text='logout' nameIcon='Logout' onClick={handleLogoutClick}/></li>} */}
    </ul>
</nav>
}