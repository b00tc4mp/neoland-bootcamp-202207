import Loggito from '../utils/Loggito'
import authenticateUser from '../logics/authenticateUser'
import withContext from '../utils/withContext'


function LoginPage({ onLinkClick, onLogIn, context: { handleFeedback } }) {
    const logger = new Loggito(LoginPage.name)

    

    // const context = useContext(Context)
    // const handleFeedback = context.handleFeedback

    logger.info('constructor')

    logger.info('return')

    const handleLinkClick = event => {
        event.preventDefault()

        onLinkClick()
    }

    const handleFormSubmit = event => {
        event.preventDefault()

        const form = event.target

        const emailInput = form.email
        const passwordInput = form.password

        const email = emailInput.value
        const password = passwordInput.value

        try {
            authenticateUser(email, password, (error, token) => {
                if (error) {
                    handleFeedback({ message: error.message, level: 'error'})

                    logger.warn(error.message)

                    return
                }

                logger.debug('user logged in')

                sessionStorage.token = token

                onLogIn()
            })
        } catch (error) {
            handleFeedback({ message: error.message, level: 'error'})

            logger.warn(error.message)
        }
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
            <div className='buttons buttons-login'>
                <button className="button" type="submit">Login</button>
                <a className="anchor" href="register" onClick={handleLinkClick}>Register</a>
            </div>
        </form>

    </main>
}

export default withContext(LoginPage)