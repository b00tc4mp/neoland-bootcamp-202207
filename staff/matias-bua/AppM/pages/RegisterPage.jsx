function RegisterPage({onFeedback,onLinkClick}) {
    const logger = new Loggito (RegisterPage.name)

    logger.info ('constructor')

    const handleLinkClick = event => {
        event.preventDefault ()
        
        onLinkClick ()
    } 
    logger.info ('render')

    const handleFormSubmit = event => {
        event.preventDefault()

        const form = event.target

        const nameImput = form.name
        const emailInput = form.email
        const passwordInput = form.password

        const name = nameImput.value
        const email = emailInput.value
        const password = passwordInput.value
    
        try {
            registerUser(name, email, password, (error) => {
              if (error) {
                onFeedback({ message: error.message, level: 'warning'})
                
                //falert(error.message);
        

                logger.warn (error.message)
                return;
              }
              logger.debug('register reset')
              form.reset();

              onFeedback({ message: 'Register Success' , level: 'success'})

              onLinkClick()
        
            });
          } catch (error) {
            onFeedback({ message: error.message , level: 'warning'})

            logger.warn(error.message)
        
          }
    
          logger.info('render')
    }


    return <main className="register-page container container--full container--spaced">
    <form className="form" onSubmit={handleFormSubmit}>
        <div className="form__field">
            <label htmlFor="name">Name</label>
            <input className='input' type="text" name="name" placeholder="name" id="name" />
        </div>

        <div className="form__field">
            <label htmlFor="email">E-mail</label>
            <input className="input" type="email" name="email" placeholder="email" id="email" />
        </div>

        <div className="form__field">
            <label htmlFor="password">Password</label>
            <input className="input" type="password" name="password" placeholder="password" id="password" />
        </div>

        <button className="button" type="submit" >Register</button>
    </form>

    <a className="anchor" href="login.html" onClick={handleLinkClick}>Login</a>
</main>
}