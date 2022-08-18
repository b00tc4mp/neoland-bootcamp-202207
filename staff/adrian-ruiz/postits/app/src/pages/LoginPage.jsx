import authenticateUser from '../logic/authenticateUser'
import ThemeSelector from '../components/ThemeSelector'

import Loggito from '../utils/loggito'
import logo from "../assets/sample-logo.png"

function LoginPage({ onLinkClick, onLogin, onFeedback }) {

    const logger = new Loggito('LoginPage')

    const handleLinkClick = event => {
        event.preventDefault()
        onLinkClick()
    }

    const handleFormSubmit = event => {
        event.preventDefault()

        const { target: form, target: {
            email: { value: email },
            password: { value: password }
        } } = event

        try {
            authenticateUser(email, password, (error, token) => {
                if (error) {
                    onFeedback({ level: "error", message: error.message })

                    logger.warn(error.message)
                    return
                }

                logger.debug('User loged in')

                sessionStorage.setItem('UserToken', token)

                onLogin()
                form.reset()

            })
        } catch (error) {
            onFeedback({ level: "error", message: error.message })

            logger.warn(error.message)
        }
    }


    return (
        <main className="page loginPage">
            <section className="mainBackground">
                <section className="topSectionContainer">
                    <div className="topSection">
                        <div className="topSectionImage">
                            <img src={logo} href="#/" alt="Company Logo" id="companyLogo" />
                        </div>
                    </div>
                </section>
                <section className="formContainer">
                    <div className="formDiv">
                        <form className="form loginForm" onSubmit={handleFormSubmit}>
                            <label htmlFor="email" className="labelForm">E-mail</label>
                            <input type="email" name="email" />
                            <label htmlFor="password" className="labelForm">Password</label>
                            <input type="password" name="password" />
                            <button type="submit" className="submitButton" id="loginSubmitButton"><p className="buttonText">Login</p></button>
                            <div className="anchorContainer">
                                <a className="anchor registerLink" href="#/" onClick={handleLinkClick} >Register</a>
                            </div>
                        </form>
                    </div>
                    <ThemeSelector />
                </section>
            </section>

        </main>
    )


}

export default LoginPage

