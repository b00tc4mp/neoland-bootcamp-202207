class Menu extends Component {
  constructor(props) {
    super(props);

    this.logger = new Loggito("Menu");
    this.logger.info("render");

    // this.state = { view: "notes" };

    this.elementsMenu =
      this.props.menuView === "notes"
        ? [
            { text: "Settings", action: this.onSettingsClick },
            { text: "Logout", action: this.onLogoutClick },
          ]
        : [
            { text: "Notes", action: this.onNotesClick },
            { text: "Logout", action: this.onLogoutClick },
          ];
  }

  onLogoutClick = () => this.props.onLogoutClick();

  onSettingsClick = () => {
    // this.setState({ view: "settings" });
    this.props.onSettingsClick();
  };

  onNotesClick = () => {
    // this.setState({ view: "notes" });
    this.props.onNotesClick();
  };

  render() {
    return (
      <div className="menu-panel">
        <ul className="dropdown-menu menu-panel__list">
          {this.elementsMenu.map((element) => {
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
