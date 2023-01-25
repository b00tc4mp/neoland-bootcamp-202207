import Loggito from '../utils/Loggito'
import registerUser from '../logic/registerUser'
import withContext from '../utils/withContext'
import { DuplicityError } from 'errors'


function RegisterPage({ onLinkClick, context: {handleFeedback} }) {
    const logger = new Loggito(RegisterPage.name)

    logger.info('constructor')

    const handleLinkClick = event => {
        event.preventDefault()

        onLinkClick()
    }

    const handleFormSubmit = event => {
        event.preventDefault()

        const form = event.target

        const nameImput = form.name
        const emailInput = form.email
        const passwordInput = form.password

        const name = nameImput.value
        const email = emailInput.value
        const password = passwordInput.value

        try {
            registerUser(name, email, password, (error) => {
                if (error) {
                    handleFeedback({ message: error.message, level: 'error' })

                    logger.warn(error.message)
                    
                    return
                }
                logger.debug('register reset')
                handleFeedback({ message: 'New usser', level: 'success' })
                form.reset()
                onLinkClick()

            })
        } catch (error) {
            handleFeedback({ message: error.message, level: 'error' })

            logger.warn(error.message)
        }
    }

    logger.info('render')

    return (<main className="register-page container container--full container--spaced">
        <h1> ¡Create your new Account!</h1>
        <form className="form" onSubmit={handleFormSubmit}>
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
            <a className="anchor" href="login.html" onClick={handleLinkClick}>Login</a>
        </form>

    </main>)
}

export default withContext(RegisterPage)