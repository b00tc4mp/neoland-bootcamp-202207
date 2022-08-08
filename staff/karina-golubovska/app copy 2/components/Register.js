class Register {
    constructor() {
        const temp = document.createElement('temp')
        temp.innerHTML = `<main class="register-page container container--spaced">
        <form class="form">
            <div class="form__field" >
                <input type="name" placeholder="name" name="name">
            </div>
            <div="form__field">
                <input type="email" placeholder="email" name="email">
            </div>
            <div="form__field">
                <input type="password" placeholder="password" name="password">
            </div>

            <button class="button" type="submit">Register</button>
        </form>

        <a class="anchor" href="login.html">Login</a>
    </main>`
        this.container = temp.firstChild
    }
    onLinkClick(callback) {
        this.container.querySelector('.anchor').onclick = event => {
            event.preventDefault()

            callback()
        }
    }

    onFormSubmit (callback) {
        const form = this.container.querySelector('form')

        form.onsubmit = function (event) {
            event.preventDefault()

            const name = form.name.value
            const email = form.email.value
            const password = form.password.value
            callback(name, email, password)
        }
    }
    reset() {
        this.container.querySelector('form').reset()
    }
}