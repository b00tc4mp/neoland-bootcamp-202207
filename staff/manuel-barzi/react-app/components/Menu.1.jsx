function Menu(props) {
    const logger = new Loggito('Menu')

    const handleLogoutClick = () => props.onLogoutClick()

    const handleSettingsClick = () => props.onSettingsClick()

    logger.info('render')

    return <div className="menu-panel">
        <ul className="menu-panel__list">
            {props.view !== 'settings' && <li className="menu-panel__list-item-settings">
                <IconButton text="settings" onClick={handleSettingsClick} />
            </li>}
            <li className="menu-panel__list-item-logout">
                <IconButton text="logout" onClick={handleLogoutClick} />
            </li>
        </ul>
    </div>
}