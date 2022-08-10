function HomePage() {
    const logger = new Loggito('HomePage')

    logger.info('constructor')

    logger.info('render')
    
    return <h1>Hello, Home!</h1>
}