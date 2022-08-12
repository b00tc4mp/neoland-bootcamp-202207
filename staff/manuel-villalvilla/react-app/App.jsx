class App extends Component {
    constructor() {
        super()

        const logger = new Logger(App.name) 

        this.logger = logger

        this.state = { view: sessionStorage.token ? 'home' : 'login' }

        this.logger.info('constructor')
    }

    handleRegisterLinkClick = () => this.setState({ view: 'register' })

    handleLoginLinkClick = () => this.setState({ view: 'login' })

    handleRegisterFormSubmit = () => this.setState({ view: 'login' })

    handleLoginFormSubmit = () => this.setState({ view: 'home' })

    handleLogoutButtonClick = () => {
        delete sessionStorage.token

        this.handleLoginLinkClick() // cambio el state.view a login

        this.logger.debug('user logged out')
    }

    render() {
        const { 
            state: { view }, 
            logger, 
            handleRegisterLinkClick, 
            handleLoginLinkClick, 
            handleLogoutButtonClick, 
            handleLoginFormSubmit, 
            handleRegisterFormSubmit 
        } = this

        logger.info('render')

        // delete sessionStorage.token

        if (view === 'login')
            return <LoginPage onRegisterLinkClick={handleRegisterLinkClick} onLoginFormSubmit={handleLoginFormSubmit}/>
        else if (view === 'register')
            return <RegisterPage onLoginLinkClick={handleLoginLinkClick} onRegisterFormSubmit={handleRegisterFormSubmit} />
        else if (view === 'home')
            return <HomePage onLogoutButtonClick={handleLogoutButtonClick} />
    }
}