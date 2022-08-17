class App extends Component{
    constructor (){
        super()

        this.state = {view:'login'}
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



