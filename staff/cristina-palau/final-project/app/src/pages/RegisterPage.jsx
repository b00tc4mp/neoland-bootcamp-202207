import registerUser from '../logic/registerUser'
import Loggito from '../utils/loggito'
import withContext from '../utils/withContext'
import logoAnimado from '../images/logoAnimado.gif'


function RegisterPage({ onRegister, onLinkClick, context: { handleFeedback } }) {

    const logger = new Loggito(RegisterPage.name)

    logger.info('constructor')

    const handleFormSubmit = event => {
        event.preventDefault()

        const { target: form } = event
        const { name: { value: name },
            email: { value: email },
            password: { value: password }
        } = form

        try {
            registerUser(name, email, password, function (error) {
                if (error) {

                    handleFeedback({ message: error.message, level: 'error' })

                    logger.warn(error.message)

                    return
                }

                handleFeedback({ message: 'your user has been registered', level: 'success' })
                event.target.reset()
                
                onRegister()
            })
        } catch (error) {

            handleFeedback({ message: error.message, level: 'error' })

            logger.warn(error.message)
        }
    }

    const handleLinkClick = event => {
        event.preventDefault()

        onLinkClick()
    }

    logger.info('render')

    return <main className="page registerPage">
        <img className="logo"  alt="logo" src={logoAnimado}/>
        <form className="form loginForm" method="get" onSubmit={handleFormSubmit}>
            <label className="formLabel" htmlFor="name">Nombre</label>
            <input className="input" type="name" name="name" placeholder="nombre" id="name" />
            <label className="formLabel" htmlFor="email">Email</label>
            <input className="input" type="email" name="email" placeholder="e-mail" id="email" />
            <label className="formLabel" htmlFor="password">Contraseña</label>
            <input className="input" type="password" name="password" placeholder="contraseña" id="password" />
            <button className="button" type="submit">Continuar</button>
        </form>
        <a className="anchor" href="login-page.html" onClick={handleLinkClick}>Login</a>
    </main >

}

export default withContext(RegisterPage)



