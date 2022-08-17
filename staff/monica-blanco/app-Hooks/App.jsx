const {useState} = React

function App () {
    const logger = new Loggito('App')

    const [view, setView] = useState(sessionStorage.token ? 'home' : 'login')

    const handleNavigationToRegister = () => {
        setView('register')

        logger.debug('setView', 'register')
    }

    const handleNavigationToLogin = () => {
        setView('login')
    
        logger.debug('setView', 'login')
    }

    const handleNavigationToHome = () => {
        setView('home')
    
        logger.debug('setView', 'home')
    }

    const handleLogoutClick = () => {
        delete sessionStorage.token

        handleNavigationToLogin()
    }
    logger.info('render')

        if (view === 'login')
            return <LoginPage onLinkClick={handleNavigationToRegister} onLogIn={handleNavigationToHome} />
        else if (view === 'register')
            return <RegisterPage onLinkClick={handleNavigationToLogin} />
        else if (view === 'home')
            return <HomePage onLogoutClick={handleLogoutClick}/>
}



