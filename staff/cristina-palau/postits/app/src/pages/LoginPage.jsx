import '../index.css'
import authenticateUser from '../logic/authenticateUser'
import Loggito from '../utils/loggito'
import withContext from '../utils/withContext'

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

                    handleFeedback({ message: error.message, level: 'error' })

                    logger.warn(error.message)

                    return
                }

                logger.debug('user logged in')

                sessionStorage.token = token

                onLogin()
            })
        } catch (error) {
            handleFeedback({ message: error.message, level: 'error' })

            logger.warn(error.message)
        }
    }


    return <main className="login-page page">

        <form className="form" method="get" onSubmit={handleFormSubmit}>
            <label htmlFor="email">Email</label>
            <input className="input" type="email" name="email" placeholder="e-mail" id="email" />
            <label htmlFor="password">Password</label>
            <input className="input" type="password" name="password" placeholder="password" id="password" />
            <button className="button" type="submit">Login</button>
        </form>
        <a className="anchor" href="register-page.html" onClick={handleLinkClick}>Register</a>

    </main >

}

export default withContext(LoginPage)

