class Header extends Component {
  constructor(props) {
    super(props);

    this.state = { view: null };
  }

  handleMenuClick = () => this.setState({ view: "menu" });

  handleCloseClick = () => this.setState({ view: null });

  onLogoutClick = () => {
    this.props.onLogoutClick();
    this.handleCloseClick();
  };

  onNotesClick = () => {
    this.props.onNotesClick();
    this.handleCloseClick();
  };

  onSettingsClick = () => {
    debugger;
    this.props.onSettingsClick();
    this.handleCloseClick();
  };

  render() {
    this.logger.info("render");

    return (
      <header className=" header flex-container navigation-bar">
        <div className="navigation-bar">
          <p className="welcome">Hello, {this.props.name}!</p>
          {this.state.view === null && (
            <button
              type="menu"
              className="menu-button menu-button__styles menu-panel-button"
              onClick={this.handleMenuClick}
            >
              <i className="fa-solid fa-poo nav-icon logout-button-style"></i>
            </button>
          )}
          {this.state.view === "menu" && (
            <button
              type="menu"
              className="menu-button menu-button__styles menu-panel-button close-menu-button-style"
              onClick={this.handleCloseClick}
            >
              x
            </button>
          )}
        </div>
        <h1 className="title">Helado Oscuro</h1>
        {this.state.view === "menu" && (
          <Menu
            onLogoutClick={this.onLogoutClick}
            onSettingsClick={this.onSettingsClick}
            onNotesClick={this.onNotesClick}
          />
        )}
      </header>
    );
  }
}
