class App extends Component {
    constructor() {
        super()

        const logger = new Logger(App.name) // TODO

        this.logger = logger

        this.state = { view: 'login' }

        this.logger.info('constructor')
    }

    handleRegisterLinkClick = () => this.setState({ view: 'register' })

    handleLoginLinkClick = () => this.setState({ view: 'login' })

    handleRegisterFormSubmit = () => this.setState({ view: 'login' })

    handleLoginFormSubmit = () => this.setState({ view: 'home' })

    render() {
        this.logger.info('render')

        if (this.state.view === 'login')
            return <LoginPage onRegisterLinkClick={this.handleRegisterLinkClick} onLoginFormSubmit={this.handleLoginFormSubmit}/>
        else if (this.state.view === 'register')
            return <RegisterPage onLoginLinkClick={this.handleLoginLinkClick} onRegisterFormSubmit={this.handleRegisterFormSubmit} />
        else if (this.state.view === 'home')
            return <HomePage />
    }
}