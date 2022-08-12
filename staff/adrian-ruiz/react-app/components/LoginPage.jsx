class LoginPage extends Component {
    constructor(props) {
        super(props)
    }

    handleLinkClick = event => {
        event.preventDefault()
    
        this.props.onLinkClick()
    }

    handleFormSubmit = event => {
        
        event.preventDefault()
        
        const {target: form, target:{
            email: {value:email},
            password: {value:password}
        }} = event

        try{
            authenticateUser(email, password, (error, token)=>{
                if (error) {
                    alert(error.message)

                    this.logger.warn(error.message)
                    return
                }
                
                this.logger.debug('User loged in')

                sessionStorage.setItem('UserToken', token)
    
                this.props.onLogin()
                form.reset()
    
            })
        }catch(error){
            alert(error.message)

            this.logger.warn(error.message)
        }
    }

    render() {
        return (
            <main className="page loginPage">
                <section className="mainBackground">
                    <section className="headerContainer">
                        <div className="header">
                            <div className="headerImage">
                                <img src="assets/sample-logo.png" alt="Company Logo" id="companyLogo" />
                            </div>
                        </div>
                    </section>
                    <section className="formContainer">
                        <div className="formDiv">
                            <form className="form loginForm" onSubmit={this.handleFormSubmit}>
                                <label htmlFor="email" className="labelForm">E-mail</label>
                                <input type="email" name="email" />
                                <label htmlFor="password" className="labelForm">Password</label>
                                <input type="password" name="password" />
                                <button type="submit" className="submitButton" id="loginSubmitButton"><p className="buttonText">Login</p></button>
                                <div className="anchorContainer">
                                    <a className="anchor registerLink" href="#" onClick={this.handleLinkClick} >Register</a>
                                </div>
                            </form>
                        </div>
                    </section>
                </section>

            </main>
        )

    }
}


