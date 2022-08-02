class Register{
    constructor(){
        const temp = document.createElement('temp')

        temp.innerHTML = `<main class="page registerPage">
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
                    <form class="form registerForm">
                        <label for="name" class="labelForm">Name</label>
                        <input type="text" name="name">
                        <label for="email" class="labelForm">E-mail</label>
                        <input type="email" name="email">
                        <label for="password" class="labelForm">Password</label>
                        <input type="password" name="password">
                        <div class="passDiv off"><h3>La contraseña no cumple los requisitos</h3>
                            <p id="lowerCase" class="off">- Debe introducir al menos 1 letra minúscula</p>
                            <p id="upperCase" class="off">- Debe introducir al menos 1 letra mayúscula</p>
                            <p id="number" class="off">- Debe introducir al menos 1 número</p>
                            <p id="symbols" class="off">- Debe introducir al menos 1 símbolo</p>
                            <p id="length" class="off">- La contraseña debe tener entre 8 y 15 caracteres</p>
                        </div>
                        <button type="submit" class="submitButton" id="registerSubmitButton"><p class="buttonText">Register</p></button>
                        <div class="anchorContainer">
                            <a class="anchor loginLink" href="#">Login</a>
                        </div>
                    </form>
                    
                    
                </div>
                
                
            </section>
        </section>
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

        form.onsubmit = function(event){
            event.preventDefault()

            const name = form.name.value
            const email = form.email.value
            const password = form.password.value

            callback(name, email, password)
        }
    }

    onPassInput(callback) {

        const div = this.container.querySelector('.passDiv')
        const pLowerCase = div.querySelector('#lowerCase')
        const pUpperCase = div.querySelector('#upperCase')
        const pNumber = div.querySelector('#number')
        const pSymbols = div.querySelector('#symbols')
        const pLength = div.querySelector('#length')
        const form = this.container.querySelector('form')
        const formPassword = form.password
        formPassword.oninput = () => {
            callback(formPassword, div, pLowerCase, pUpperCase, pNumber, pSymbols, pLength)
        }
    }
    reset(){
        this.container.querySelector('form').reset()
    }
}