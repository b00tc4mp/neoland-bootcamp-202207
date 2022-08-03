class Login {
    constructor() {
        const temp = document.createElement('temp')

        temp.innerHTML = `<main class="login-page page">
        <div class="login-container container">
            <form class="form">
                <div class="form__field">
                    <label for="email">email</label>
                    <input class="input" type="email" name="email" placeholder="e-mail" id="email">
                </div>

                <div class="form__field">
                    <label for="password">password</label>
                    <input class="input" type="password" name="password" placeholder="password" id="password">
                </div>

                <div class="form__field">
                    <button class="button" type="submit">Login</button>
                </div>
            </form>
            <a class="anchor" href="register-page.html">Register</a>
        </div>
    </main>`

        this.container = temp.firstChild
    }

    onLinkClick(callback) {
        this.container.querySelector('.anchor').onclick = event => {
            event.preventDefault()

            callback()
        }
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

    reset() {
        this.container.querySelector('form').reset()
    }
}