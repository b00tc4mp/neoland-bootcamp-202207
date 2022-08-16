class App extends Component {
    constructor() {
        super()

        const logger = new Logger(App.name) 

        this.logger = logger

        this.state = { view: sessionStorage.token ? 'home' : 'login', showModal: false }

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

    handleModalClose = () => {
        this.setState({ showModal: false })
    }

    render() {
        const { 
            state: { view, showModal }, 
            logger, 
            handleRegisterLinkClick, 
            handleLoginLinkClick, 
            handleLogoutButtonClick, 
            handleLoginFormSubmit, 
            handleRegisterFormSubmit,
            handleModalClose 
        } = this

        logger.info('render')

        // delete sessionStorage.token

        return <>
            {view === 'login' && <LoginPage onRegisterLinkClick={handleRegisterLinkClick} onLoginFormSubmit={handleLoginFormSubmit}/>}
            {view === 'register' && <RegisterPage onLoginLinkClick={handleLoginLinkClick} onRegisterFormSubmit={handleRegisterFormSubmit} />}
            {view === 'home' && <HomePage onLogoutButtonClick={handleLogoutButtonClick} />}
            {showModal && <Modal onCloseButtonClick={handleModalClose}/>}
            </>
    }
}