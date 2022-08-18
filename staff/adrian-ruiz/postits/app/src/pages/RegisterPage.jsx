import {useState} from 'react'
import Loggito from '../utils/loggito'
import registerUser from '../logic/registerUser'
import checkPassInput from '../logic/helpers'
import PassValidationBox from '../components/PassValidationBox'

import logo from "../assets/sample-logo.png"
import ThemeSelector from '../components/ThemeSelector'

function RegisterPage({navigateLogin}) {

    const [matchers, setMatchers] = useState(
        {matchAll: null}, 
        {matchLowerCase: null},
        {matchUpperCase: null},
        {matchNumbers: null}, 
        {matchLength: null}, 
        {matchSymbols: null}
    )

    const logger = new Loggito('Register Page')

    const handleLinkClick = event => {
        event.preventDefault()

        navigateLogin()
    }
    const handleFormSubmit = event => {
        event.preventDefault()

        const { target: form, target: {
            name: { value: name },
            email: { value: email },
            password: { value: password }
        } } = event

        try {
            registerUser(name, email, password, (error) => {

                if (error) {
                    alert(error.message)
                    logger.debug(error.message)
                    return
                }
                navigateLogin()

            })
        } catch (error) {
            alert(error)
            logger.debug(error.message)

        }
        form.reset()
    }

    const checkPassword = event => {
        const pass = event.target.value

        const state = checkPassInput(pass, matchers)

        setMatchers(state)
    }


    return (
        <main className="page registerPage">
            <section className="mainBackground">
                <section className="topSectionContainer">
                    <div className="topSection">
                        <div className="topSectionImage">
                            <img src={logo} alt="Company Logo" id="companyLogo" />
                        </div>
                    </div>
                </section>
                <section className="formContainer">
                    <div className="formDiv">
                        <form className="form registerForm" onSubmit={handleFormSubmit}>
                            <label htmlFor="name" className="labelForm">Name</label>
                            <input type="text" name="name" />
                            <label htmlFor="email" className="labelForm">E-mail</label>
                            <input type="email" name="email" />
                            <label htmlFor="password" className="labelForm">Password</label>
                            <input type="password" name="password" onInput={checkPassword} />
                            <PassValidationBox conditions={matchers} />
                            <button type="submit" className="submitButton" id="registerSubmitButton"><p className="buttonText">Register</p></button>
                            <div className="anchorContainer">
                                <a className="anchor loginLink" href="#/" onClick={handleLinkClick}>Login</a>
                            </div>
                        </form>
                    </div>
                    <ThemeSelector />
                </section>
            </section>
        </main>
    )

}

export default RegisterPage