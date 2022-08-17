// function Menu(props) {
//     const { view, onLogoutClick, onSettingsClick } = props
function Menu({ view, onLogoutClick, onSettingsClick }) {
    const logger = new Loggito('Menu')

    const handleLogoutClick = () => onLogoutClick()

    const handleSettingsClick = () => onSettingsClick()

    // const handleInfoClick = () => onInfoClick()

    logger.info('render')

    return <div className="menu-panel">
        <ul className="menu-panel__list">
            {view !== 'settings' && <li className="menu-panel__list-item-settings">
                <IconButton text="settings" onClick={handleSettingsClick}/>
            </li>}
            {/* {view !== 'favorite' && <li className="menu-panel__list-item-favorite" >
            <IconButton text="favorite" onClick={handleInfoClick} />
            </li>} */}
            <li className="menu-panel__list-item-logout">
                <IconButton text="logout" onClick={handleLogoutClick} />
            </li>
        </ul>
    </div>
}