function LoginPage(props) {
    const logger = new Logger(LoginPage.name)

    logger.info('constructor')

    const handleLinkClick = event => {
        event.preventDefault()

        props.onRegisterLinkClick()
    }

    const handleLoginFormSubmit = event => {
        event.preventDefault()

        const form = event.target
        const email = event.target.email.value
        const password = event.target.password.value

        try {
            authenticateUser(email, password, function (error, token) {
                if (error) {
                    alert(error.message)

                    logger.warn(error.message)
    
                    return
                }
    
                form.reset()
                
                sessionStorage.token = token

                logger.debug('user logged in successfully')
    
                props.onLoginFormSubmit() // esto solo cambia el view
            })
        } catch (error) {
            alert(error.message)

            logger.warn(error.message)
        }
    }

    logger.info('render')

    return <main className="body-center login-page">
        <div className="form-container">
        <form className="login-form" onSubmit={handleLoginFormSubmit}>
            <label htmlFor="email">email</label>
            <input type="email" name="email" id="email" placeholder="email" />
            <label htmlFor="password">password</label>
            <input type="password" name="password" id="password" placeholder="password" />
            <button type="submit">Login</button>
        </form>
        </div>
        <a href="#" onClick={handleLinkClick}>Register</a>
    </main>
}