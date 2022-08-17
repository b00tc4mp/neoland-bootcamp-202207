function LoginPage({ onLinkClick, onLogIn }){
    
    const handleLinkClick = event => {
        event.preventDefault()

        onLinkClick()
    }

    const handleFormSubmit = event => {
        event.preventDefault()

        const email = event.target.email.value
        const password = event.target.password.value

        
        authenticateUser(email, password, (error, token) => {
            if(error){
                alert(error.message)
                return;
            }
            sessionStorage.token = token;
                
            onLogIn()
        })
            
    }

    return <main className="login-page container container--full container--spaced">
    <form className="form" action="https://www.google.com/search" method="get" onSubmit={handleFormSubmit}>
        <div className="form__field">
            <label htmlFor="email">E-mail</label>
            <input className="input" type="email" name="email" placeholder="email" id="email" />
        </div>

        <div className="form__field">
            <label htmlFor="password">Password</label>
            <input className="input" type="password" name="password" placeholder="password" id="password" />
        </div>

        <button className="button" type="submit">Login</button>
    </form>

    <a className="anchor" href="register.html" onClick={handleLinkClick}>Register</a>
</main>
}