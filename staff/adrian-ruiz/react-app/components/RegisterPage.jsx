class RegisterPage extends Component {
    constructor(props) {
        super(props)

        this.state = {matchAll: null , matchLowerCase: null, matchUpperCase: null, matchNumbers: null, matchLength: null, matchSymbols: null}
    }

    handleLinkClick = event => {
        event.preventDefault()

        this.props.navigateLogin()
    }
    handleFormSubmit = event => {
        event.preventDefault()

        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value

        try {
            registerUser(name, email, password, (error) => {
    
                if (error) {
                    alert(error.message)
                    this.logger.debug(error.message)
                    return
                }
                this.props.navigateLogin()

            })
        } catch (error) {
            alert(error)
            this.logger.debug(error.message)
    
        }
        form.reset()
    }

    checkPassword = event => {
        const pass = event.target.value

        const state = checkPassInput(pass, this.state)

        this.setState(state)
        
    }

    render() {
        return (
            <main className="page registerPage">
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
                            <form className="form registerForm" onSubmit={this.handleFormSubmit}>
                                <label htmlFor="name" className="labelForm">Name</label>
                                <input type="text" name="name" />
                                <label htmlFor="email" className="labelForm">E-mail</label>
                                <input type="email" name="email" />
                                <label htmlFor="password" className="labelForm">Password</label>
                                <input type="password" name="password" onInput={this.checkPassword} />
                                <PassValidationBox conditions={this.state} />
                                <button type="submit" className="submitButton" id="registerSubmitButton"><p className="buttonText">Register</p></button>
                                <div className="anchorContainer">
                                    <a className="anchor loginLink" href="#" onClick={this.handleLinkClick}>Login</a>
                                </div>
                            </form>
                        </div>
                    </section>
                </section>
            </main>
        )
    }
}