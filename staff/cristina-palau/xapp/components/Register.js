class Register{
    constructor() {
        const temp = document.createElement('temp')
        
        temp.innerHTML=`<main class="register-page page">
        <div class="register-container container">
            <form class="form">
                
                    <label for="user">user</label>
                    <input class="input" type="text" name="name" placeholder="name" id="name-reg">
                
                
                    <label for="email">email</label>
                    <input class="input" type="email" name="email" placeholder="e-mail" id="email-reg">
                
                
                    <label for="password">password</label>
                    <input class="input" type="password" name="password" placeholder="password" id="password-reg">
                                                 
                    <button class="submitbutton" type="submit">Register</button>
                
            </form>
            <a class="anchor" href="login-page.html">Login</a>
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