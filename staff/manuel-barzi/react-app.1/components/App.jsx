class App extends React.Component {
    constructor() {
        super()

        const logger = new Loggito('App')

        this.logger = logger

        this.state = { view: 'login' }

        this.logger.info('constructor')
    }

    handleNavigationToRegister = () => this.setState({ view: 'register' })

    handleNavigationToLogin = () => this.setState({ view: 'login' })

    handleNavigationToHome = () => this.setState({ view: 'home' })

    render() {
        this.logger.info('render')

        if (this.state.view === 'login')
            return <LoginPage onLinkClick={this.handleNavigationToRegister} onLogIn={this.handleNavigationToHome} />
        else if (this.state.view === 'register')
            return <RegisterPage onLinkClick={this.handleNavigationToLogin} />
        else if (this.state.view === 'home')
            return <HomePage />
    }
}