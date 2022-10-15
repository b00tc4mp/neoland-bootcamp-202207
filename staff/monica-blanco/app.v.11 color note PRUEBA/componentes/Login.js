class Login {
    constructor(){
        const temp = document.createElement('temp')

        temp.innerHTML = `<main class="login-page container container--spaced">
        <form class="form">
            <img class="img"
                src="https://solucionesesfinge.com/wp-content/uploads/2018/12/pantone_gif.gif">
            <div class:"form__field">
                <div class="email">
                    <label for="email">Email</label>
                    <input class='input' type="email" placeholder="Email" id="email">
                </div>
                    <div class="form__field">
                        <label for="password">Password</label>
                        <input class='input' type="password" placeholder="Password" id="password">
                    </div>
                </div>
                <button class="button" type="submit">Login</button>
            </form>
            <a class="anchor" href="#"> Register </a>
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