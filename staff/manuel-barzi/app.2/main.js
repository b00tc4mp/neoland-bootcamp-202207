const loginPage = document.querySelector('.login-page')
const registerPage = document.querySelector('.register-page')

const registerLink = loginPage.querySelector('.anchor')
registerLink.onclick = function(event) {
    event.preventDefault()
    
    loginPage.classList.add('off')
    registerPage.classList.remove('off')
}

const loginLink = registerPage.querySelector('.anchor')
loginLink.onclick = function(event) {
    event.preventDefault()

    registerPage.classList.add('off')
    loginPage.classList.remove('off')
}
