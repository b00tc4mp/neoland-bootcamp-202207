function RegisterPage({onLinkClick,onSingUp}){
    const logger = new Loggito(LoginPage.name)

    logger.info('constructor')
    logger.info('render')

    const handleLinkClick = event =>{
        event.preventDefault()

        onLinkClick()
    }

    const handleFormSubmit = event =>{
        event.preventDefault()

        const form = event.target

        const name= form.name.value
        const email= form.email.value
        const password= form.password.value

        try {
            registerUser(name, email, password, function (error) {
                if (error) {
                    alert(error.message)
                    return
                }
                logger.debug('registered user')
    
                event.target.reset()
                onSingUp()
            })
    
        } catch (error) {
            alert(error.message)
        }

    }

    return <main className="container register_page">
    <form className="form form-register" onSubmit={handleFormSubmit}>

        <img className="img img-register" src="https://th.bing.com/th/id/OIP.8oRhQutdRIwwPM6f-eTiwwAAAA?pid=ImgDet&rs=1"
            alt=""/>
        <div className="form__field">
            <label className="label__movil">USERNAME</label>
            <input className="input input-user" type="text" name="name" placeholder="Username"/>
        </div>
        <div className="form__field">
            <label className="label__movil">EMAIL</label>
            <input className="input input-email" type="email" name="email" placeholder="Email"/>
        </div>
        <div className="form__field">
            <label className="label__movil">PASSWORD</label>
            <input className="input input-pass" type="password" name="password" placeholder="Password"/>
        </div>

        <button className="button-login" type="submit">SIGNUP</button>

    </form>

    <a className="link link-login" href="#" onClick={handleLinkClick}>LOGIN</a>
</main>
}