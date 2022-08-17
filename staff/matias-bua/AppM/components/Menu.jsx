function Menu({view, onLogoutClick,onSettingsClick}) {
    const logger = new Loggito ('Menu')

    const handleLogoutClick = () => onLogoutClick()

    const handleSettingsClick = () => onSettingsClick()

    logger.info ('render')

    return <ul className="Menu">
            {view !== 'settings' && <li className="Menu__item">
            <IconButton text="settings" onClick={handleSettingsClick} />
            </li>}
            <li className="Menu__item">
            <IconButton text="logout" onClick={handleLogoutClick} />
            </li>
        </ul>
}