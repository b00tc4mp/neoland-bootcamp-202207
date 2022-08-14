function Menu(props){
    const logger = new Loggito('Menu')
    
    const handleSettingsClick = () => props.onSettingsClick()

    const handleLogoutClick = () => props.onLogoutClick()
    
    logger.info('render')

    return <nav className="menu-panel nav-home" id="nav-home">
    <ul className="menu-panel__list menu-home">
        {props.view !== 'settings' && <li className="menu-item item_settings"><IconButtonMenuPanel text='settings' nameIcon='Settings' onClick={handleSettingsClick}/></li>}
        {props.view !== 'design' && <li className="menu-item item_design"><IconButtonMenuPanel text='brush' nameIcon='Design'/></li>}
        {props.view !== 'language' && <li className="menu-item item_language"><IconButtonMenuPanel text='language' nameIcon='Language'/></li>}
        {<li className="menu-item item_logout"><IconButtonMenuPanel text='logout' nameIcon='Logout' onClick={handleLogoutClick}/></li>}
    </ul>
</nav>
}