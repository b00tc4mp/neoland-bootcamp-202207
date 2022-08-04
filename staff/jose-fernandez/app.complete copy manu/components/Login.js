class Login extends NavigableForm{
    constructor() {
        super(`<main class="login-page container container--full container--spaced">
        <form class="form container" action="https://www.google.com/search" method="get">
             <img class="img img-login" src="https://i.postimg.cc/XJt6N71Q/169506285-136925785104495-7194486606775599435-n.jpg" alt="">
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