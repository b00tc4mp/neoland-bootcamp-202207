class Register extends Component {
    constructor() {
        super(`<main class="body-center register-page">
        <div class="form-container">
        <form class="register-form">
            <label for="name">name</label>
            <input type="text" id="name" placeholder="name">
            <label for="email">email</label>
            <input type="email" id="email" placeholder="email">
            <label for="password">new password</label>
            <input type="password" id="password" placeholder="new password">
            <button type="submit">Register</button>
        </form>
        </div>
        <a href="#">Login</a>
    </main>`)
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

            const name = form.name.value
            const email = form.email.value
            const password = form.password.value

            callback(email, password)
        }
    }

    reset() {
        this.container.querySelector('form').reset()
    }
}