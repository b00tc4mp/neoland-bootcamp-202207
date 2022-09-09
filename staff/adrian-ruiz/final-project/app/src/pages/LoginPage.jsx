import './LoginPage.css'
import { authenticateUser } from '../logic'
import { toaster } from 'evergreen-ui'
function LoginPage({ onLogin, navigateRegister }) {

    const loginHandler = (event) => {

        event.preventDefault()

        const { target: form, target: {
            email: { value: email },
            password: { value: password }
        } } = event

            ;(async () => {
                try {
                    const token = await authenticateUser(email, password)
                    sessionStorage.setItem('UserToken', token)
                    form.reset()
                    onLogin()
                } catch (error) {
                    toaster.warning('Something went wrong', {duration : 3, description: error.message})
                }
            })()
    }
    return (
        <div className="loginPage">
            <div className="loginForm__container">
                <h2 className='login__title'>Amazing ERP Online</h2>
                <form className='form login__form' action='#' onSubmit={loginHandler}>
                    <label className='form__label' htmlFor="email">Email</label>
                    <input className='form__input' type="email" name="email"></input>
                    <label className='form__label' htmlFor="password">Password</label>
                    <input className='form__input' type="password" name="password"></input>
                    <div className='form__linksContainer'>
                        <a href='#' className='form__link' onClick={navigateRegister}>Register free</a>
                        <a href='#' className='form__link__right'>Forgot your password?</a>
                    </div>
                    <button className='form__button form__submit' type="submit">Log In</button>
                    <button className='form__button form__google'>Sign with Google</button>
                </form>
            </div>
            <div className="carrusel__container"></div>
        </div>
    )
}

export default LoginPage