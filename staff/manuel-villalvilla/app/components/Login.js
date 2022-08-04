class Login {
    constructor() {
        const temp = document.createElement('temp')

        temp.innerHTML = `<main class="body-center login-page">
            <div class="form-container">
            <form class="login-form">
                <label for="email">email</label>
                <input type="email" name="email" placeholder="email">
                <label for="password">password</label>
                <input type="password" name="password" placeholder="password">
                <button type="submit">Login</button>
            </form>
            </div>
            <a href="#">Register</a>
        </main>`

        this.container = temp.firstChild
    }

    onLinkClick(callback) {
        this.container.querySelector('a').onclick = event => {
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