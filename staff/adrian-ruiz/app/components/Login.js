class Login extends NavigableForm{
    constructor(){
        super(`<main class="page loginPage">
        <section class="mainBackground">
            <section class="headerContainer">
                <div class="header">
                    <div class="headerImage">
                        <img src="assets/sample-logo.png" alt="Company Logo" id="companyLogo">
                    </div>
                </div>
            </section>
            <section class="formContainer">
                <div class="formDiv">
                    <form class="form loginForm">
                        <label for="email" class="labelForm">E-mail</label>
                        <input type="email" name="email">
                        <label for="password" class="labelForm">Password</label>
                        <input type="password" name="password">
                        <button type="submit" class="submitButton" id="loginSubmitButton"><p class="buttonText">Login</p></button>
                        <div class="anchorContainer">
                            <a class="anchor registerLink" href="#">Register</a>
                        </div>
                    </form>
                    
                </div>
                
            </section>
        </section> 
            
    </main>`)
    }

    onFormSubmit(callback) {    // override
        const form = this.container.querySelector('form')

        form.onsubmit = function(event){
            event.preventDefault()

            const email = form.email.value
            const password = form.password.value

            callback(email, password)
        }
    }
}