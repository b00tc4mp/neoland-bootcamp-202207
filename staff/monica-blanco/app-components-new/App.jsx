class App extends Component {
    constructor() {
        super()

        this.state = { view: sessionStorage.token ? 'home' : 'login' }
    }

    handleNavigationToRegister = () => this.setState({ view: 'register' })

    handleNavigationToLogin = () => this.setState({ view: 'login' })

    handleNavigationToHome = () => this.setState({ view: 'home' })

    handleLogoutClick = () => {
        delete sessionStorage.token

        this.handleNavigationToLogin()
    }

    render() {
        this.logger.info('render')

        const {
            state: { view },
            handleNavigationToRegister,
            handleNavigationToHome,
            handleNavigationToLogin,
            handleLogoutClick
        } = this

        if (view === 'login')
            return <LoginPage onLinkClick={handleNavigationToRegister} onLogIn={handleNavigationToHome} />
        else if (view === 'register')
            return <RegisterPage onLinkClick={handleNavigationToLogin} />
        else if (view === 'home')
            return <HomePage onLogoutClick={handleLogoutClick}/>
    }
}



