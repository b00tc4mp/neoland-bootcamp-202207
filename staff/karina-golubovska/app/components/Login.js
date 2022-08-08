class Login extends NavigableForm {
    constructor() {
        super (`<main class="login-page page container container--spaced">
        <form class="form">
            <img src="https://as2.ftcdn.net/v2/jpg/05/11/01/67/1000_F_511016787_q32A3nTBJYmbnDVucD6nPi0jPp3zDXC1.jpg ">
            <div="form__field">
                <input type="email" name="email" placeholder="email">
            </div>
            <div ="form__field">
                <input type="password" name="password" placeholder="password">
            </div>
            <button class="button" type="submit">Login </button>
        </form>

        <a class="anchor" href="register.html">Register</a>

</main>`)

    }
    // onLinkClick(callback) {
    //     this.container.querySelector('.anchor').onclick = event => {
    //         event.preventDefault()

    //         callback()
    //     }
    // }

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

