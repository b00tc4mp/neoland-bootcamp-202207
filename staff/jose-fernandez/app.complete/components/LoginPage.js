class LoginPage {
    constructor() {
        const temp = document.createElement('temp')
        temp.innerHTML = `<main class="container login_page ">
        <form class="form form-login">
            <img class="img img-login"
                src="https://i.postimg.cc/XJt6N71Q/169506285-136925785104495-7194486606775599435-n.jpg" alt="">

            <div class="form__field">
                <label class="label__movil">EMAIL</label>
                <input class="input input-email" type="email" name="email" placeholder="Email" id="login-email">
            </div>
            <div class="form__field">
                <label class="label__movil">PASSWORD</label>
                <input class="input input-pass" type="password" name="password" placeholder="Password" id="login-pass">
            </div>

            <button class="button-login" type="submit">LOGIN</button>

        </form>

        <p class="nolink-register"> Not a member <a class="link link-register" href="#"> ! SINGUP NOW ¡</a></p>
    </main>`

        this.container = temp.firstChild
    }

    onLinkClick(callback) {
        this.container.querySelector('.link-register').onclick = event => {
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