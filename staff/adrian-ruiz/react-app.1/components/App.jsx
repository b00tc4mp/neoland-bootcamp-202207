class App extends Component{
    constructor(){
        super()

        this.state = sessionStorage.UserToken ? {view: 'home'} : {view: 'login'}
    }

    handleNavigationToRegister = () =>{
        this.setState({view: 'register'})
    }

    handleNavigationToLogin = () => {
        this.setState({view: 'login'})
    }

    handleNavigationToHome = () => {
        this.setState({view: 'home'})
    }

    handleLogout = () => {
        sessionStorage.removeItem('UserToken')
        this.setState({view: 'login'})
    }

    render(){
        
        this.logger.info('render')

       
        if(this.state.view === 'login')
            return <LoginPage onLinkClick={this.handleNavigationToRegister} onLogin={this.handleNavigationToHome}/>
        else if(this.state.view === 'register')
            return <RegisterPage navigateLogin={this.handleNavigationToLogin}/>
        else if(this.state.view === 'home')
            return <HomePage onLogout={this.handleLogout}/>
        
        
    }
}