function App() {
    const logger = new Loggito('App')

    logger.info('constructor')

    logger.info('render')
    
    // return <LoginPage />
    //return <RegisterPage />
    return <HomePage /> // HomePage()
}