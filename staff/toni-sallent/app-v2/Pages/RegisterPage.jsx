function RegisterPage({ onLinkClick }){
    
    const handleOnFormSubmit = event => {
        event.preventDefault()

        const name = event.target.email.value
        const email = event.target.email.value
        const password = event.target.password.value

        registerUser(name, email, password, (error) => {
            if(error) {
                alert(error.message)
                return;
            }
            
            onLinkClick()
        })

    }

    const handleLinkClick = event => {
        event.preventDefault();

        onLinkClick()
    }
    
    
    
    
    return <main className="register-page container container--full container--spaced">
    <form className="form" onSubmit={handleOnFormSubmit}>
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