function Menu({view, onSettingsClick, onCloseClick, onLogoutClick}) {
    const logger = new Loggito('Menu')
    
    const handleLogoutClick = () => onLogoutClick()
    const handleCloseClick = () => onCloseClick()
    const handleSettingsClick = () => onSettingsClick()

    logger.info('render')

return <div className="menu-panel">
    <div className="close" onClick={handleCloseClick}></div>
    <ul className="menu-list">
        {view !== 'settings' && <li className="menu-panel-settings"><button className="profile-button" onClick={handleSettingsClick}>Profile Settings</button></li>}
        <li className="menu-panel-logout"><button className="logout-button" onClick={handleLogoutClick}>Logout</button></li>
    </ul>
</div>
}