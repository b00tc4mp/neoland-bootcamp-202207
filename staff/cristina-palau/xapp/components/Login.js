class Login {
    constructor() {
        const temp = document.createElement('temp')

        temp.innerHTML = `<main class="login-page page">
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