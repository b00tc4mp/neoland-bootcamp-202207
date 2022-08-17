function LoginPage({onLinkClick, onLogin, onFeedback}) {

    const logger = new Loggito(LoginPage.name)

    logger.info('constructor')

    logger.info('render')

    const handleLinkClick = event => {
        event.preventDefault()

        onLinkClick()
    }

    const handleFormSubmit = event => {
        event.preventDefault()
        const form = event.target

        const emailInput = form.email
        const passwordInput = form.password

        const email = emailInput.value
        const password = passwordInput.value

        try {
            authenticateUser(email, password, (error, token) => {
                if (error) {
                    
                    onFeedback({ message: error.message, level: 'error' })

                    logger.warn(error.message)

                    return
                }

                logger.debug('user logged in')

                sessionStorage.token = token

                onLogin()
            })
        } catch (error) {
            onFeedback({ message: error.message, level: 'error' })

            logger.warn(error.message)
        }
    }


    return <main className="login-page page">

        <form className="form" method="get" onSubmit={handleFormSubmit}>
            <label htmlFor="email">email</label>
            <input className="input" type="email" name="email" placeholder="e-mail" id="email" />
            <label htmlFor="password">password</label>
            <input className="input" type="password" name="password" placeholder="password" id="password" />
            <button className="button" type="submit">Login</button>
        </form>
        <a className="anchor" href="register-page.html" onClick={handleLinkClick}>Register</a>

    </main >

}

