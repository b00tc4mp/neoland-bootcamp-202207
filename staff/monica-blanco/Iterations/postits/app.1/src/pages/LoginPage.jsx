import Loggito from '../utils/Loggito'
import authenticateUser from '../logic/authenticateUser'
import withContext from '../utils/withContext'

function LoginPage({onLinkClick, onLogIn, context: { handleFeedback }}) {
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
                    handleFeedback({ message: error.message, level: 'warning'})

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
        <form className="form" onSubmit={handleFormSubmit}>
            <img className="img"
                src="https://solucionesesfinge.com/wp-content/uploads/2018/12/pantone_gif.gif"/>
            <div className="form__field">
                <div className="email">
                    <label htmlFor="email">Email</label>
                    <input className='input' type="email" name="email" placeholder="Email" id="email"/>
                </div>
                    <div className="form__field">
                        <label htmlFor="password">Password</label>
                        <input className='input' type="password" name="password" placeholder="password" id="password"/>
                    </div>
                </div>
                <button className="button" type="submit">Login</button>
            </form>
            <a className="anchor" href="#" onClick={handleLinkClick}> Register </a>
        </main>
}

export default withContext (LoginPage)

