function RegisterPage({ onLinkClick, onRegisterFormSubmit, onFeedback}) {
    const logger = new Loggito(RegisterPage.name)

    logger.info('constructor')

    const handleLinkClick = event => {// 
        event.preventDefault()

             onLinkClick()
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
            registerUser(name, email, password, (error) => {
                if (error) {
                    onFeedback({message: error.message, level: 'error'})// mensaje feedback de error si no logramos ingresar con exito!
                    
                    logger.warn(error.message)

                    return
                }
                form.reset()

                onFeedback({message: 'Success Register', level:'success'})// supuestamente aqui hacemos el feedback para entrar con exito con happy path!

                logger.debug('register reset')
                
                onRegisterFormSubmit()
            })
        } catch (error) {
            onFeedback({message: error.message, level: 'error'})

            logger.warn(error.message)
        }
    }


    logger.info('render')

    return <main className="register-page container container--full container--spaced">
        <form className="form form-register" onSubmit={handleRegisterFormSubmit} >
            <div className="form__field">
                <label htmlFor="name">Name</label>
                <input className="input" type="text" name="name" placeholder="name" id="name" />
            </div>

            <div className="form__field">
                <label htmlFor="email">E-mail</label>
                <input className="input" type="email" name="email" placeholder="email" id="email" />
            </div>

            <div className="form__field">
                <label htmlFor="password">Password</label>
                <input className="input" type="password" name="password" placeholder="password" id="password" />
            </div>

            <button className="button" type="submit">Register</button>
        </form>

        <a className="anchor" href="login.html" onClick={handleLinkClick}>Login</a>
    </main>
}
    
    
    