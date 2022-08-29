function Menu(props){
    const logger = new Loggito('Menu')

    const handleLogoutClick = () => props.onLogoutClick()
    
    logger.info('render')

    return <nav className="menu-panel nav-home" id="nav-home">
    <ul className="menu-panel__list menu-home">
        <li className="menu-item item_settings"><IconButtonMenuPanel text='settings' nameIcon='Settings'/></li>

        <li className="menu-item item_design"><IconButtonMenuPanel text='brush' nameIcon='Design'/></li>

        <li className="menu-item item_language"><IconButtonMenuPanel text='language' nameIcon='Language'/></li>

        <li className="menu-item item_logout"><IconButtonMenuPanel text='logout' nameIcon='Logout' onClick={handleLogoutClick}/></li>
        
    </ul>
</nav>
}