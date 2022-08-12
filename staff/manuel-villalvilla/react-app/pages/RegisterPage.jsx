function RegisterPage({onLoginLinkClick, onRegisterFormSubmit}) {
    const logger = new Logger(RegisterPage.name)

    logger.info('constructor')

    const handleLinkClick = event => {
        event.preventDefault()

        onLoginLinkClick()
    }

    const handleRegisterFormSubmit = event => {
        event.preventDefault()

        const {
            target: form, 
            target: { 
                name: { value: name },
                email: { value: email },
                password: { value: password }
            }
        } = event
        

        try {
            registerUser(name, email, password, function (error) {
                if (error) {
                    alert(error.message)

                    logger.warn(error.message)

                    return
                }
                
                form.reset()

                alert('New user successfully created')

                logger.debug('user registered successfully')
    
                onRegisterFormSubmit() // esto solo cambia el view
            })

        } catch (error) {
            alert(error.message)

            logger.warn(error.message)
        }

        onRegisterFormSubmit()
    }

    logger.info('render')

    return <main className="body-center register-page">
        <div className="form-container">
        <form className="register-form" onSubmit={handleRegisterFormSubmit}>
            <label htmlFor="name">name</label>
            <input type="text" id="name" placeholder="name" />
            <label htmlFor="email">email</label>
            <input type="email" id="email" placeholder="email" />
            <label htmlFor="password">new password</label>
            <input type="password" id="password" placeholder="new password" />
            <button type="submit">Register</button>
        </form>
        </div>
        <a href="#" onClick={handleLinkClick}>Login</a>
    </main>
}