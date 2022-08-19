class Login extends NavigableForm{
    constructor() {
        super(`<main class="login-page page">
        <div class="login-container container">
            <form class="form">
                
                    <label for="email">email</label>
                    <input class="input" type="email" name="email" placeholder="e-mail" id="email">
                

                
                    <label for="password">password</label>
                    <input class="input" type="password" name="password" placeholder="password" id="password">
                

                
                    <button class="submitbutton" type="submit">Login</button>
                
            </form>
            <a class="anchor" href="register-page.html">Register</a>
        </div>
    </main>`)
    }

    onFormSubmit(callback) {
        const form = this.container.querySelector('form')

        form.onsubmit = function (event) {
            event.preventDefault()

            const email = form.email.value
            const password = form.password.value

            callback(email, password)
        }
    }
}