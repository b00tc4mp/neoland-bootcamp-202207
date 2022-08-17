function Menu(props) {
  const logger = new Loggito('menu')

  const handleLogoutClick = () => props.onLogoutClick()

  const handleSenttingsClick = () => props.onSettingsClick()

  logger.info('render')

  return <div className="menu-panel">
    <ul className="menu-panel__list">
      <li className="menu-panel__list-item-settings">
        <IconButton text="settings" onClick={handleSenttingsClick} />
      </li>
      <li className="menu-panel__list-item-logout">
      <IconButton text="logout" onClick={handleLogoutClick} />
      </li>
    </ul>
  </div>
}