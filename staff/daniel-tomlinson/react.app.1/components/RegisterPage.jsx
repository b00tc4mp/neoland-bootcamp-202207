function RegisterPage(props) {
    const logger = new Loggito('RegisterPage')

    logger.info('constructor')

    const handleClick = event => {
        event.preventDefault()

        props.onLinkClick()
    }
    
    logger.info('render')

    const handleFormSubmit = (event) => {
        event.preventDefault()
    
        const form = event.target
        
        const nameInput = form.name
        const emailInput = form.email
        const passwordInput= form.password
    
        const name = nameInput.value
        const email = emailInput.value
        const password = passwordInput.value

        try {
            registerUser(name, email, password, function (error) {
              if (error) {
                alert(error.message);

                logger.warn(error.message)
        
                return;
              }
              debugger;
              
              form.reset();
        
            });
          } catch (error) {
            alert(error.message);

            logger.warn(error.message)
          }
          props.onRegister()
        };
 

    return <main className="register-page page background flex-container">
    <div className="login-elements flex-container">
      <form action="" className="form flex-container login-form" onSubmit={handleFormSubmit}>
        <div className="input-fields">

          <div className="form__field">
            <label htmlFor="name">name</label>
            <input type="text" placeholder="name" name="name" id="name" className="input-item" />
          </div>

          <div className="form__field">
            <label htmlFor="email">email</label>
            <input type="email" placeholder="email" name="email" id="email" className="input-item" />
          </div>

          <div className="form__field">
            <label htmlFor="password">password</label>
            <input type="password" placeholder="password" name="password" id="password" className="input-item" />
          </div>
  

        </div>
        <button type="submit" className="button--primary">Register</button>
      </form></div>
      <a className="anchor" onClick={handleClick}>Already have an account?</a>
    
</main>

}


// TODO ?? add onSubmit to form


/* function RegisterPage(props) {
    const logger = new Loggito('RegisterPage')

    logger.info('constructor')

    const handleClick = event => {
        event.preventDefault()

        props.onLinkClick()
    }

    logger.info('render')

    return <main className="register-page container container--full container--spaced">
        <form className="form">
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

        <a className="anchor" href="login.html" onClick={handleClick}>Login</a>
    </main>
} */