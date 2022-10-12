const { useEffect } = React;

function Menu({
  view,
  menuView,
  onLogoutClick,
  onSettingsClick,
  onNotesClick,
}) {
  const logger = new Loggito("Menu");

  logger.info("render");

  // this.state = { view: "notes" };

  const handleLogoutClick = () => onLogoutClick();

  const handleSettingsClick = () => {
    // this.setState({ view: "settings" });
    onSettingsClick();
  };

  const handleNotesClick = () => {
    // this.setState({ view: "notes" });
    onNotesClick();
  };

  const elementsMenu =
    menuView === "notes"
      ? [
          { text: "Settings", action: handleSettingsClick, key: 1 },
          { text: "Logout", action: handleLogoutClick, key: 3 },
        ]
      : [
          { text: "Notes", action: handleNotesClick, key: 2 },
          { text: "Logout", action: handleLogoutClick, key: 3 },
        ];

  return (
    <div className="menu-panel">
      <ul className="dropdown-menu menu-panel__list">
        {elementsMenu.map((element) => {
          return (
            <li
              className="menu-panel__list-item dropdown-item settings-button"
              key={element.key}
              onClick={element.action}
            >
              <button className="dropdown__link ">
                <i className="fa-solid fa-poo nav-icon poo-list-style"></i>
                {element.text}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
// instead of having my onClick on the button, I have it on the list item

// I need to change the declared buttons above to <IconButton />

{
  /* <div className="menu-panel">
  
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

</div> */
}
