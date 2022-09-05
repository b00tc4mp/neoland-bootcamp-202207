import './RegisterPage.css'
function RegisterPage() {
    return (
        <div class="registerPage">
            <div class="registerForm__container">
                <h2 className='register__title'>Create new account</h2>
                <p className='register__p__italic'>Your finances, made simple</p>
                <form className='form register__form' action='#'>
                    <label className='form__label' htmlFor="name">Name</label>
                    <input className='form__input' type="text" name="name"></input>

                    <label className='form__label' htmlFor="lastName">Last Name</label>
                    <input className='form__input' type="text" name="lastName"></input>

                    <label className='form__label' htmlFor="email">Email</label>
                    <input className='form__input' type="text" name="email"></input>

                    <label className='form__label' htmlFor="password">Password</label>
                    <input className='form__input' type="password" name="password"></input>

                    <label className='form__label' htmlFor="confirmPassword">Confirm Password</label>
                    <input className='form__input' type="password" name="confirmPassword"></input>
                    <div className='form__linksContainer'>
                        <a href='#' className='form__link'>Already have an account? Login</a>
                    </div>
                    <button className='form__button form__submit' type="submit">Create Account</button>
                    <button className='form__button form__google'>TODO Sign Up with Google</button>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage