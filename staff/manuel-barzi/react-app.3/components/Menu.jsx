function Menu(props) {
    const handleLogoutClick = () => props.onLogoutClick()

    return <div className="menu-panel">
        <ul className="menu-panel__list">
            <li className="menu-panel__list-item-settings">
                <IconButton text="settings" />
            </li>
            <li className="menu-panel__list-item-logout">
                <IconButton text="logout" onClick={handleLogoutClick} />
            </li>
        </ul>
    </div>
}