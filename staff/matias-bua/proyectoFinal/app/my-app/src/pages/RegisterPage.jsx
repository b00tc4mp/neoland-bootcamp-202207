import Loggito from '../utils/Loggito'
import registerUser from '../logics/registerUser'
import withContext from '../utils/withContext'
import './RegisterPage.css'

function RegisterPage({ onLinkClick, onRegisterFormSubmit, context: { handleFeedback } }) {
    const logger = new Loggito(RegisterPage.name)

    logger.info('constructor')

    // let today = new Date();
    // let dd = today.getDate();
    // let mm = today.getMonth() + 1; //January is 0!
    // let yyyy = today.getFullYear() + 18;
    // if (dd < 10) {
    //     dd = '0' + dd
    // }
    // if (mm < 10) {
    //     mm = '0' + mm
    // }

    // today = yyyy + '-' + mm + '-' + dd;

    const handleLinkClick = event => {
        event.preventDefault()

        onLinkClick()
    }

    const handleRegisterFormSubmit = event => {
        event.preventDefault()

        const {
            target: form,
            target: {
                name: { value: name },
                lastname: { value: lastname },
                email: { value: email },
                password: { value: password },
                birth: { value: birth },
                phonenumber: { value: phonenumber }
            }
        } = event

        debugger

        try {
            registerUser(name, lastname, email, password, birth, phonenumber, (error) => {
                if (error) {
                    handleFeedback({ message: error.message, level: 'error' })// mensaje feedback de error si no logramos ingresar con exito!

                    logger.warn(error.message)

                    return
                }
                form.reset()

                handleFeedback({ message: 'Success Register', level: 'success' })// supuestamente aqui hacemos el feedback para entrar con exito con happy path!

                logger.debug('register reset')

                onRegisterFormSubmit()
            })
        } catch (error) {
            handleFeedback({ message: error.message, level: 'error' })

            logger.warn(error.message)
        }
    }

    logger.info('return')

    return <main className="register-page">
        <form className="form" onSubmit={handleRegisterFormSubmit}>
            <div className="form__field">
                <label htmlFor="name">Register</label>
                <input className="input" type="text" name="name" placeholder="Name" id="name" />
            </div>

            <div className="form__field">
                <label htmlFor="lastname"></label>
                <input className="input" type="text" name="lastname" placeholder="Lastname" id="lastname" />
            </div>

            <div className="form__field">
                <label htmlFor="email"></label>
                <input className="input" type="email" name="email" placeholder="Email" id="email" />
            </div>

            <div className="form__field">
                <label htmlFor="password"></label>
                <input className="input" type="password" name="password" placeholder="Password" id="password" />
            </div>

            <div className="form__field">
                <label htmlFor="birth"></label>
                <input className="input" type="date" /*max={today}*/ name="birth" placeholder="Birth" id="birth" />
            </div>

            <div className="form__field">
                <label htmlFor="phonenumber"></label>
                <input className="input" type="phonenumber" name="phonenumber" placeholder="Phonenumber" id="phonenumber" />
            </div>


            <div className="buttons-register">
                <button className="button" type="submit">Register</button>
                <a className="anchor" href="login" onClick={handleLinkClick}>Login</a>
            </div>

        </form>
    </main>
}

export default withContext(RegisterPage)