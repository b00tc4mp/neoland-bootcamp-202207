function Menu({ onLogoutClick, onSettingsClick, view }) {
    
    const handleSettingsClick = () => {
        
        onSettingsClick();
    }

    const handleLogoutClick = () => {
        
        onLogoutClick()
    }
    
    return <div className="menu-panel">
    <ul className="menu-panel__list">
        {view !== 'settings' && <li className="menu-panel__list-item-settings">
            <IconButton text="settings" onClick={handleSettingsClick} />
        </li>}
        <li className="menu-panel__list-item-logout">
            <IconButton text="logout" onClick={handleLogoutClick} />
        </li>
    </ul>
</div>

}