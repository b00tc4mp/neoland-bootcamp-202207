function RegisterPage(onRegister, onLinkClick) {

    const logger = new Loggito(RegisterPage.name)

    logger.info('constructor')

    const handleFormSubmit = event => {
        event.preventDefault()
        const form = event.target

        const nameInput = form.name
        const emailInput = form.email
        const passwordInput = form.password

        const name = nameInput.value
        const email = emailInput.value
        const password = passwordInput.value

        try {
            registerUser(name, email, password, function (error) {
                if (error) {
                    alert(error.message)

                    return
                }
                
                event.target.reset()
                onRegister()
                
            })
        } catch (error) {
            alert(error.message)
        }
        
      
    }


    const handleLinkClick = event => {
        event.preventDefault()

        onLinkClick()
    }

    logger.info('render')

    return <main className="register-page page">
        <form className="form" method="get" onSubmit={handleFormSubmit}>

            <label htmlFor="user">user</label>
            <input className="input" type="text" name="name" placeholder="name" id="name-reg" />

            <label htmlFor="email">email</label>
            <input className="input" type="email" name="email" placeholder="e-mail" id="email-reg" />


            <label htmlFor="password">password</label>
            <input className="input" type="password" name="password" placeholder="password" id="password-reg" />

            <button className="submitbutton" type="submit">Register</button>

        </form>
        <a className="anchor" href="login-page.html" onClick={handleLinkClick}>Login</a>
    </main>
}

// onFormSubmit(callback) {
//     const form = this.container.querySelector('form')

//     form.onsubmit = function (event) {
//         event.preventDefault()

//         const name = form.name.value
//         const email = form.email.value
//         const password = form.password.value

//         callback(name, email, password)
//     }
// }