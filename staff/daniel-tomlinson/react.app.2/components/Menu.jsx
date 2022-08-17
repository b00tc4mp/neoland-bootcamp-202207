function Menu(props) {
  const logger = new Loggito("Menu");

  const onLogoutClick = () => props.onLogoutClick();

  const onSettingsClick = () => {
    props.onSettingsClick();
  };

  const onNotesClick = () => {
    props.onNotesClick();
  };

  logger.info("render");

  const elementsMenu = [
    { text: "Settings", action: onSettingsClick },
    { text: "Notes", action: onNotesClick },
    { text: "Logout", action: onLogoutClick },
  ];

  return (
    <div className="menu-panel">
      <ul className="dropdown-menu menu-panel__list">
        {elementsMenu.map((element) => {
          return (
            <li
              className="menu-panel__list-item dropdown-item settings-button"
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
