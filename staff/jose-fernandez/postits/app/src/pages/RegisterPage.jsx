import Loggito from '../utils/Loggito'
import registerUser from '../logic/registerUser'
import withContext from '../utils/withContext'

function RegisterPage({ onLinkClick, onSingUp, context:{handleFeedback} }) {
    const logger = new Loggito(RegisterPage.name)

    
    logger.info('constructor')
    logger.info('return')

    const handleLinkClick = event => {
        event.preventDefault()

        onLinkClick()
    }

    const handleFormSubmit = event => {
        event.preventDefault()

        const { target: form } = event

        const {
            name: { value: name },
            email: { value: email },
            password: { value: password }
        } = form

        try {
            registerUser(name, email, password, function (error) {
                if (error) {
                    handleFeedback({ message: error.message, level: 'error'})

                    logger.warn(error.message)
                    return
                }
                handleFeedback({ message: error.message, level: 'error'})
                logger.debug('registered user')

                event.target.reset()
                onSingUp()
            })

        } catch (error) {
            handleFeedback({ message: error.message, level: 'error'})

            logger.warn(error.message)
        }

    }

    return <main className="container register_page">
        <form className="form form-register" onSubmit={handleFormSubmit}>

            <img className="img img-register" src="https://th.bing.com/th/id/OIP.8oRhQutdRIwwPM6f-eTiwwAAAA?pid=ImgDet&rs=1"
                alt="" />
            <div className="form__field">
                <label className="label__movil">USERNAME</label>
                <input className="input input-user" type="text" name="name" placeholder="Username" />
            </div>
            <div className="form__field">
                <label className="label__movil">EMAIL</label>
                <input className="input input-email" type="email" name="email" placeholder="Email" />
            </div>
            <div className="form__field">
                <label className="label__movil">PASSWORD</label>
                <input className="input input-pass" type="password" name="password" placeholder="Password" />
            </div>

            <button className="button-login" type="submit">SIGNUP</button>

        </form>

        <a className="link link-login" href="#" onClick={handleLinkClick}>LOGIN</a>
    </main>
}
export default withContext(RegisterPage)