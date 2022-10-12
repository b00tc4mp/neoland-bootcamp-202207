class Login {
    constructor() {
        const temp = document.createElement('temp')

        temp.innerHTML = `<main class="login-page container container--spaced">
            <form class="form" action="https://www.google.com/search" method="get">
                <div class="form__field">
                    <label for="email">E-mail</label>
                    <input class="input" type="email" name="email" placeholder="email" id="email">
                </div>

                <div class="form__field">
                    <label for="password">Password</label>
                    <input class="input" type="password" name="password" placeholder="password" id="password">
                </div>

                <button class="button" type="submit">Login</button>
            </form>

            <a class="anchor" href="register.html">Register</a>
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