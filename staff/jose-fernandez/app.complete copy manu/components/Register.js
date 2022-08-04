class Register extends NavigableForm {
    constructor() {
        super(`<main class="register-page container container--full container--spaced">
        <form class="form container">
        <img class="img img-register" src="https://th.bing.com/th/id/OIP.8oRhQutdRIwwPM6f-eTiwwAAAA?pid=ImgDet&rs=1"
        alt="">
            <div class="form__field">
                <label for="name">name</label>
                <input class="input" type="text" name="name" placeholder="name" id="name">
            </div>

            <div class="form__field">
                <label for="email">email</label>
                <input class="input" type="email" name="email" placeholder="email" id="email">
            </div>

            <div class="form__field">
                <label for="password">password</label>
                <input class="input" type="password" name="password" placeholder="password" id="password">
            </div>

            <button class="button" type="submit">Register</button>
        </form>

        <a class="anchor" href="login.html">Login</a>
    </main>`)
    }


    onFormSubmit(callback) {
        const form = this.container.querySelector('form')

        form.onsubmit = function (event) {
            event.preventDefault()
        
            const name = form.name.value
            const email = form.email.value
            const password = form.password.value
        
            callback(name, email, password)
        }
    } 
}