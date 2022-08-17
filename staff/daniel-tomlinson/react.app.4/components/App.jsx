class App extends Component {
  constructor() {
    super();

    this.state = { view: sessionStorage.token ? "home" : "login" };
  }

  handleNavigationToRegister = () => this.setState({ view: "register" });

  handleNavigationToLogin = () => this.setState({ view: "login" });

  handleNavigationToHome = () => this.setState({ view: "home" });

  handleLogoutClick = () => this.handleNavigationToLogin();

  render() {
    this.logger.info("render");

    if (this.state.view === "login")
      return (
        <LoginPage
          onLinkClick={this.handleNavigationToRegister}
          onLogIn={this.handleNavigationToHome}
        />
      );

    if (this.state.view === "register")
      return (
        <RegisterPage
          onLinkClick={this.handleNavigationToLogin}
          onRegister={this.handleNavigationToLogin}
        />
      );

    if (this.state.view === "home")
      return (
        <HomePage
          onLogoutClick={this.handleLogoutClick}
          onSettingsClick={this.props.handleSettingsClick}
        />
      );
  }
}
