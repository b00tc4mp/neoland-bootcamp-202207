function Menu(props) {
    const logger = new Loggito('Menu')

    const handleLogoutClick = () => props.onLogoutClick()

    const handleSettingsClick = () => props.onSettingsClick()

    const handleNotesClick = () => props.onNotesClick()

    logger.info('render')

    return <div className="menu-panel">

    <ul className="dropdown-menu menu-panel__list">
      <li className="menu-panel__list-item dropdown-item settings-button" onClick={handleSettingsClick}>
        <button className="dropdown__link"></button><i className="fa-solid fa-poo nav-icon poo-list-style"></i>Settings</li>
        <li className="menu-panel__list-item dropdown-item notes-button" onClick={handleNotesClick}>
            <button className="dropdown__link ">
                <i className="fa-solid fa-poo nav-icon poo-list-style"></i>Notes
                </button> </li>
        <li className="menu-panel__list-item dropdown-item logout-button" onClick={handleLogoutClick}>
            <button className="dropdown__link"></button><i className="fa-solid fa-poo nav-icon poo-list-style"></i>Logout</li>
    </ul>

</div>

}
// instead of having my onClick on the button, I have it on the list item 



// I need to change the declared buttons above to <IconButton />


{/* <div className="menu-panel">
  
  <ul className="dropdown-menu menu-panel__list">
    <li className="menu-panel__list-item-settings dropdown-item settings-button">
      <button></button> </li>
      <li className="menu-panel__list-item-notes dropdown-item notes-button">
          <button className="dropdown__link ">
              <i className="fa-solid fa-poo nav-icon poo-list-style"></i>Notes
              </button> </li>
      <li className="menu-panel__list-item-logout dropdown-item logout-button">
          <button></button> </li>
  </ul>

</div> */}

