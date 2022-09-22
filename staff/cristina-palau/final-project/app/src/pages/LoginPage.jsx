import authenticateUser from '../logic/authenticateUser'
import Loggito from '../utils/loggito'
import "../index.sass"
import withContext from '../utils/withContext'
import logoAnimado from '../images/logoAnimado.gif'
import { useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function LoginPage({ onLinkClick, onLogin, context: { handleFeedback } }) {

    const logger = new Loggito(LoginPage.name)

    logger.info('constructor')

    logger.info('render')

    const handleLinkClick = event => {
        event.preventDefault()

        onLinkClick()
    }

    const handleFormSubmit = event => {
        event.preventDefault()

        const { target: form } = event

        const { email: { value: email },
            password: { value: password }
        } = form
        try {
            authenticateUser(email, password, (error, token) => {
                if (error) {

                    toast.error(error.message, {position: toast.POSITION.TOP_CENTER, theme: "colored"})


                    logger.warn(error.message)

                    return
                }

                logger.debug('user logged in')

                sessionStorage.token = token

                onLogin()
            })
        } catch (error) {

            toast.error(error.message, {position: toast.POSITION.TOP_RIGHT, theme: "colored"})
            
                    logger.warn(error.message)
        }
    }

    return <main className="loginPage page">

        <img className="logo form-logo" alt="logo" src={logoAnimado}/>

        <form className="form loginForm" method="get" onSubmit={handleFormSubmit}>
            <label className="formLabel" htmlFor="email">Email</label>
            <input className="input" type="email" name="email" placeholder="e-mail" id="email" />
            <label className="formLabel" htmlFor="password">Contraseña</label>
            <input className="input" type="password" name="password" placeholder="contraseña" id="password" />
            <button className="button" type="submit">Continuar</button>
        </form>

        <div className="center">¿Aún no tienes cuenta?  <a className="anchor" href="register-page.html" onClick={handleLinkClick}>¡Regístrate!</a></div>
    </main >

}

export default withContext(LoginPage)



