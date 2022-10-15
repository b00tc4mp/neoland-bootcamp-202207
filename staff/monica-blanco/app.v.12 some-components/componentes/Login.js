class Login extends NavigableForm{
    constructor(){
        super(`<main class="login-page container container--full container--spaced">
        <form class="form">
            <img class="img"
                src="https://solucionesesfinge.com/wp-content/uploads/2018/12/pantone_gif.gif">
            <div class:"form__field">
                <div class="email">
                    <label for="email">Email</label>
                    <input class='input' type="email" name="email" placeholder="Email" id="email">
                </div>
                    <div class="form__field">
                        <label for="password">Password</label>
                        <input class='input' type="password" name="password" placeholder="password" id="password">
                    </div>
                </div>
                <button class="button" type="submit">Login</button>
            </form>
            <a class="anchor" href="#"> Register </a>
        </main>`)  
    }

    onFormSubmit(callback) { //override
        const form = this.container.querySelector('form')

        form.onsubmit = function (event) {
            event.preventDefault()

            const email = form.email.value
            const password = form.password.value

            callback(email, password)
        }
    }
}