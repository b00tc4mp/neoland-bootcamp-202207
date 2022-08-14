function LoginPage({onLinkClick,onLogIn}){
    const logger = new Loggito(LoginPage.name)

    logger.info('constructor')

    logger.info('render')

    const handleLinkClick = event => {
        event.preventDefault()

        onLinkClick()
    }
    
    const handleFormSubmit = event =>{
        event.preventDefault()

        const form= event.target

        const emailInput = form.email
        const passwordInput = form.password

        const email = emailInput.value
        const password = passwordInput.value

        try {
            authenticateUser(email,password,(error, token)=>{
                if(error){
                    alert(error.message)

                    logger.warn(error.message)
                    return
                }
                logger.debug('user logged in')

                sessionStorage.token= token
                event.target.reset()
                onLogIn()
                
            })
        } catch (error) {
            alert(error.message)

            logger.warn(error.message)
        }
    }

    return <main className="container login_page ">
    <form className="form form-login" onSubmit={handleFormSubmit}>
        <img className="img img-login"
            src="https://i.postimg.cc/XJt6N71Q/169506285-136925785104495-7194486606775599435-n.jpg" alt=""/>

        <div className="form__field">
            <label className="label__movil">EMAIL</label>
            <input className="input input-email" type="email" name="email" placeholder="Email" id="login-email"/>
        </div>
        <div className="form__field">
            <label className="label__movil">PASSWORD</label>
            <input className="input input-pass" type="password" name="password" placeholder="Password" id="login-pass"/>
        </div>

        <button className="button-login" type="submit">LOGIN</button>

    </form>

    <p className="nolink-register"> Not a member <a className="link link-register" href="#" onClick={handleLinkClick}> ! SINGUP NOW ¡</a></p>
</main>
}