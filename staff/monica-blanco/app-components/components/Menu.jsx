function Menu(props) {
    const logger = new Loggito('Menu')

    const handleLogoutClick = () => props.onLogoutClick()

    logger.info('render')

    return <div className="menu-panel">
        <ul className="menu-panel__list">
            <li className="menu-panel__list-item-settings">
                <IconButton text="settings" />
            </li>
            <li className="menu-panel__list-item-favorite">
            <IconButton text="favorite" />
            </li>
            <li className="menu-panel__list-item-logout">
                <IconButton text="logout" onClick={handleLogoutClick} />
            </li>
        </ul>
    </div>
}